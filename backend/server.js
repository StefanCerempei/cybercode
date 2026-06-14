const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Verifică dacă Python și GCC sunt instalate
const checkDependencies = () => {
    console.log('🔍 Checking dependencies...');

    exec('python --version', (error) => {
        if (error) {
            console.warn('⚠️  Python not found! Python execution will not work.');
            console.warn('   Install Python from: https://www.python.org/downloads/');
        } else {
            console.log('✅ Python found');
        }
    });

    exec('gcc --version', (error) => {
        if (error) {
            console.warn('⚠️  GCC not found! C execution will not work.');
            console.warn('   Install MinGW from: https://www.mingw-w64.org/');
        } else {
            console.log('✅ GCC found');
        }
    });
};

app.post('/api/execute', async (req, res) => {
    const { language, code, stdin = '' } = req.body;
    const fileId = uuidv4();

    console.log(`\n📥 Executing ${language} code...`);
    console.log(`📝 Code length: ${code.length} characters`);

    if (language === 'python') {
        // Execuție Python
        const filePath = path.join(__dirname, `${fileId}.py`);

        try {
            fs.writeFileSync(filePath, code);

            exec(`python "${filePath}"`, { timeout: 5000, maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
                fs.unlinkSync(filePath);

                res.json({
                    output: stdout || (error ? '' : 'Execution completed'),
                    error: stderr || (error ? error.message : ''),
                    code: error ? 1 : 0
                });
            });
        } catch (err) {
            res.json({
                output: '',
                error: `Execution error: ${err.message}`,
                code: 1
            });
        }
    }
    else if (language === 'c') {
        // Execuție C - compilează și rulează
        const cFilePath = path.join(__dirname, `${fileId}.c`);
        const exePath = path.join(__dirname, `${fileId}.exe`);

        try {
            fs.writeFileSync(cFilePath, code);

            // Compilează codul C
            exec(`gcc "${cFilePath}" -o "${exePath}"`, { timeout: 10000 }, (compileError, compileStdout, compileStderr) => {
                if (compileError) {
                    fs.unlinkSync(cFilePath);
                    res.json({
                        output: compileStdout,
                        error: compileStderr || `Compilation error: ${compileError.message}`,
                        code: 1
                    });
                    return;
                }

                // Rulează executabilul
                exec(`"${exePath}"`, { timeout: 5000, maxBuffer: 1024 * 1024 }, (runError, stdout, stderr) => {
                    // Curăță fișierele
                    fs.unlinkSync(cFilePath);
                    if (fs.existsSync(exePath)) fs.unlinkSync(exePath);

                    res.json({
                        output: stdout || (runError ? '' : 'Execution completed'),
                        error: stderr || (runError ? runError.message : ''),
                        code: runError ? 1 : 0
                    });
                });
            });
        } catch (err) {
            res.json({
                output: '',
                error: `Execution error: ${err.message}`,
                code: 1
            });
        }
    }
    else {
        res.status(400).json({ error: 'Unsupported language' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        dependencies: {
            python: checkPython(),
            gcc: checkGCC()
        }
    });
});

function checkPython() {
    try {
        execSync('python --version', { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

function checkGCC() {
    try {
        execSync('gcc --version', { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/execute\n`);
    checkDependencies();
});