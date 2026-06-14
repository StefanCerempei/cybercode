import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogPost() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        window.scrollTo(0, 0);
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [id]);

    const articles = {
        'python-birth': {
            title: 'The Birth of Python: How a Christmas Project Changed Programming Forever',
            date: 'December 25, 1989',
            author: 'Guido van Rossum',
            readTime: 8,
            color: '#3776AB',
            content: `
                <p>In the winter of 1989, while working at the Centrum Wiskunde & Informatica (CWI) in the Netherlands, Guido van Rossum found himself with extra time during the Christmas holidays. His colleagues were gone, the office was quiet, and he needed a creative outlet.</p>

                <p>He had been working on the Amoeba distributed operating system and wanted to use a scripting language. But existing options like Perl and ABC (a language he helped develop) had limitations. So he decided to create his own.</p>

                <h2>The Name "Python"</h2>
                <p>The name "Python" wasn't chosen because of the snake. Van Rossum was a fan of the British comedy group Monty Python. He wanted a name that was short, unique, and slightly mysterious. And so, Python was born.</p>

                <h2>The First Release</h2>
                <p>By February 1991, Python 0.9.0 was released to the world on alt.sources. It already had classes, exception handling, functions, and the core data types that Python developers still use today.</p>

                <h2>Python 2.0 and 3.0</h2>
                <p>The true breakthrough came with Python 2.0 in 2000, introducing list comprehensions and garbage collection. Then Python 3.0 in 2008 - a controversial release that broke backward compatibility but fixed fundamental flaws.</p>

                <h2>Python Today</h2>
                <p>Today, Python is the #1 language for data science, AI, and education. It runs on Mars (NASA's Perseverance rover), powers Netflix's recommendation engine, and is the first language taught at MIT and Stanford.</p>

                <blockquote>What started as a Christmas side project now has over 15 million developers worldwide. The lesson? Never underestimate the power of a hobby project.</blockquote>

                <h2>Key Milestones</h2>
                <ul>
                    <li><strong>1989</strong> - Development begins</li>
                    <li><strong>1991</strong> - Python 0.9.0 released</li>
                    <li><strong>2000</strong> - Python 2.0 with list comprehensions</li>
                    <li><strong>2008</strong> - Python 3.0 (breaking changes)</li>
                    <li><strong>2020</strong> - Python 2 end of life</li>
                </ul>

                <p>Python's philosophy is captured in the "Zen of Python" by Tim Peters:</p>
                <pre><code>Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Readability counts.</code></pre>
            `
        },
        'c-language-god': {
            title: 'C: The God Language That Still Rules the World (50 Years Later)',
            date: '1972',
            author: 'Dennis Ritchie',
            readTime: 7,
            color: '#00599C',
            content: `
                <p>Before C, operating systems were written in assembly language. Each computer needed a completely rewritten OS. Then came Dennis Ritchie at Bell Labs.</p>

                <p>The year was 1972. Ritchie and Ken Thompson were working on Unix. They needed a language that was powerful like assembly but portable across different machines. The result? C.</p>

                <h2>The Power of C</h2>
                <p>C gave programmers an unprecedented combination: high-level convenience with low-level control. You could manipulate memory directly, create efficient algorithms, and still write readable code.</p>

                <p>The impact was immediate and massive. Unix was rewritten in C, making it portable. This portability made Unix explode in academia and business. Soon, every computer scientist needed to know C.</p>

                <h2>The K&R Book</h2>
                <p>But the real genius was K&R C - the book "The C Programming Language" by Kernighan and Ritchie. At just 272 pages, it taught generations how to think about programming at a fundamental level.</p>

                <h2>C's Influence Today</h2>
                <p>C's influence is everywhere:</p>
                <ul>
                    <li><strong>Linux kernel</strong> - 100% C</li>
                    <li><strong>Windows kernel</strong> - Mostly C</li>
                    <li><strong>Python interpreter</strong> - Written in C</li>
                    <li><strong>Almost every database engine</strong> - C or C++</li>
                    <li><strong>Embedded systems</strong> - Cars, routers, IoT devices</li>
                </ul>

                <p>Even today, C ranks in the top 5 languages (TIOBE Index). Embedded systems, operating systems, game engines, and high-performance computing still rely on C.</p>

                <blockquote>Dennis Ritchie passed away in 2011, but his creation lives on. Every time you use a computer, phone, or IoT device, there's a high chance C code is running underneath. Half a century later, C remains the undisputed god language.</blockquote>

                <h2>Why C Endures</h2>
                <p>C's simplicity is its strength. There are no hidden costs, no mysterious abstractions. What you write is what the computer executes. For systems programming, embedded devices, and performance-critical applications, nothing beats C.</p>
            `
        },
        'ada-lovelace': {
            title: "The First Programmer in History Was a Woman (And You've Never Heard of Her)",
            date: '1843',
            author: 'Ada Lovelace',
            readTime: 6,
            color: '#9b4d96',
            content: `
                <p>Long before Silicon Valley, before Microsoft or Apple, there was Ada Lovelace. Born in 1815 to the famous poet Lord Byron, Ada's mother insisted she study mathematics to avoid her father's "poetic madness."</p>

                <h2>The Meeting with Babbage</h2>
                <p>At 17, Ada met Charles Babbage, a mathematician who had designed the Analytical Engine - the world's first mechanical computer concept. While others saw a glorified calculator, Ada saw something revolutionary.</p>

                <h2>The First Program</h2>
                <p>In 1843, she translated an article about the Analytical Engine from Italian to English. But she didn't just translate - she added her own notes. Those notes were three times longer than the original article.</p>

                <p>In Note G, Ada wrote what historians now recognize as the first computer program: a sequence of operations for the Analytical Engine to calculate Bernoulli numbers. She even anticipated concepts like looping and subroutines.</p>

                <h2>Vision Beyond Math</h2>
                <p>But her true genius was in her vision. She wrote:</p>
                <blockquote>"The Analytical Engine might act upon other things besides number... the Engine might compose elaborate and scientific pieces of music of any degree of complexity or extent."</blockquote>

                <p>She imagined computers creating art, music, and even artificial intelligence - in 1843! This was a century before Alan Turing and the first electronic computers.</p>

                <h2>Rediscovery</h2>
                <p>For decades, Ada's contributions were forgotten. Only in the 1950s, when modern computing emerged, did historians rediscover her work.</p>

                <p>Today, Ada Lovelace Day celebrates women in STEM. The U.S. Department of Defense named a programming language "Ada" in her honor.</p>

                <blockquote>Every time someone writes code, they stand on the shoulders of this visionary woman who imagined the digital age when the world still used gas lamps and horse carriages.</blockquote>
            `
        },
        'eniac-programmers': {
            title: 'The ENIAC Programmers: The Women Who Built the Digital Age',
            date: '1945',
            author: 'ENIAC Programmers',
            readTime: 7,
            color: '#2c3e50',
            content: `
                <p>In 1945, World War II was ending, but the Cold War was beginning. The U.S. Army needed to calculate artillery firing tables - complex trajectories that took 40 hours to compute by hand.</p>

                <p>The solution was ENIAC (Electronic Numerical Integrator and Computer), the world's first general-purpose electronic computer. It weighed 30 tons, contained 18,000 vacuum tubes, and filled a whole room.</p>

                <h2>The Hidden Heroes</h2>
                <p>But here's what history books don't tell you: The men designed the hardware, but six women made it work.</p>

                <p>Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas, and Ruth Lichterman were recruited from a group of "human computers" - women who calculated ballistics by hand.</p>

                <h2>No Manuals, No Languages</h2>
                <p>They had no programming languages, no manuals, no operating systems. They programmed ENIAC by physically plugging wires and setting switches - essentially creating the concept of software from scratch.</p>

                <p>The women learned ENIAC's architecture by studying blueprints. They debugged problems by crawling inside the massive machine to find broken vacuum tubes.</p>

                <h2>Brilliant Innovations</h2>
                <p>Their work was brilliant. They developed techniques like breakpoints and subroutines that are still used today. When ENIAC was unveiled to the press in 1946, the women demonstrated it flawlessly.</p>

                <p>But at the celebration dinner, the women were not introduced. The men received all the credit. For decades, the ENIAC programmers were forgotten.</p>

                <h2>Finally Recognized</h2>
                <p>It wasn't until the 1990s that historians like Kathy Kleiman discovered their story. In 1997, the six women were inducted into the Women in Technology International Hall of Fame.</p>

                <blockquote>These pioneers invented software engineering before the term existed. They were erased, but their contributions built everything we now call "technology."</blockquote>
            `
        },
        'cpp-language': {
            title: 'C++: The Language That Runs the World (Whether You Know It or Not)',
            date: '1983',
            author: 'Bjarne Stroustrup',
            readTime: 6,
            color: '#f34b7d',
            content: `
                <p>In 1979, Bjarne Stroustrup was working on his PhD at Cambridge. He loved C for its efficiency but wanted higher-level features like Simula's classes. So he created "C with Classes."</p>

                <p>By 1983, it had a new name: C++. The ++ operator in C means "increment" - implying it was an improved version of C. But that massively understates what C++ became.</p>

                <h2>Object-Oriented Power</h2>
                <p>C++ gave developers object-oriented programming without sacrificing C's raw speed. You could build complex systems that were both powerful and elegant.</p>

                <h2>The Golden Age</h2>
                <p>The 1990s were C++'s golden age. Microsoft built Windows on C++. Adobe built Photoshop, Illustrator, and Premiere on C++. Game engines like Unreal and Unity chose C++ for its performance.</p>

                <h2>Where C++ Runs Today</h2>
                <ul>
                    <li><strong>Web Browsers</strong> - Chrome (70% C++), Firefox, Safari</li>
                    <li><strong>Databases</strong> - MySQL, MongoDB, Redis</li>
                    <li><strong>Trading Systems</strong> - Wall Street runs on C++</li>
                    <li><strong>Game Engines</strong> - Unreal Engine 5, id Tech, CryEngine</li>
                    <li><strong>Operating Systems</strong> - Parts of Windows, macOS, Linux</li>
                    <li><strong>Creative Software</strong> - Photoshop, Maya, Blender</li>
                </ul>

                <h2>Modern C++</h2>
                <p>C++ continues to evolve. C++11, C++14, C++17, C++20, and C++23 added modern features like smart pointers, lambda expressions, and concurrency support.</p>

                <blockquote>Bjarne Stroustrup famously said: "There are only two kinds of languages: the ones people complain about and the ones nobody uses."</blockquote>

                <p>People complain about C++ because they use it. And billions of devices run C++ code every second. It's not flashy, it's not trendy - but C++ is the quiet engine of our digital civilization.</p>
            `
        },
        'python-metaclasses': {
            title: "Python's Hidden Magic: Metaclasses, Decorators, and Descriptors",
            date: '2024',
            author: 'Python Core Devs',
            readTime: 9,
            color: '#3776AB',
            content: `
                <p>You've used Python for years. You know classes, functions, lists, and dictionaries. But do you know what actually happens when you write <code>class MyClass: pass</code>?</p>

                <p>Behind that simple syntax lies one of the most sophisticated metaprogramming systems ever created.</p>

                <h2>Decorators: Functions That Modify Functions</h2>
                <pre><code>def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Took {time.time()-start}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)</code></pre>

                <p>This simple @ syntax transforms your function completely. Flask uses it for routes. Django uses it for authentication. pytest uses it for test fixtures.</p>

                <h2>Descriptors: The Secret Behind @property</h2>
                <pre><code>class ValidatedAttribute:
    def __set_name__(self, owner, name):
        self.name = name
    
    def __get__(self, obj, objtype=None):
        return obj.__dict__.get(self.name)
    
    def __set__(self, obj, value):
        if not isinstance(value, (int, float)):
            raise ValueError(f"{self.name} must be numeric")
        obj.__dict__[self.name] = value

class Product:
    price = ValidatedAttribute()
    weight = ValidatedAttribute()</code></pre>

                <p>This is how SQLAlchemy turns class attributes into database columns. It's how Django models work. Descriptors are Python's hidden superpower.</p>

                <h2>Metaclasses: The Class of Classes</h2>
                <pre><code>class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    pass

# Both variables point to the SAME instance
db1 = Database()
db2 = Database()</code></pre>

                <p>Metaclasses let you intercept class creation itself. Django uses them to turn model definitions into database schemas. Protocol buffers use them to generate serialization code.</p>

                <blockquote>These features are why Python powers both tiny scripts and massive systems like Instagram (with over a billion users). The simplicity is an illusion - underneath lies profound power.</blockquote>

                <p>The next time someone says Python is "just a scripting language," show them metaclasses. Their head will spin.</p>
            `
        },
        'quantum-programming': {
            title: "Quantum Programming: How to Write Code for Computers That Don't Exist Yet",
            date: '2024',
            author: 'Quantum Dev Team',
            readTime: 8,
            color: '#6a1b9a',
            content: `
                <p>In 2019, Google's Sycamore quantum computer achieved "quantum supremacy" - solving a problem in 200 seconds that Summit (the world's best supercomputer) would take 10,000 years to solve.</p>

                <h2>What Makes Quantum Different</h2>
                <p>But quantum computers don't work like classical ones. Classical bits are 0 or 1. Quantum bits (qubits) can be 0, 1, or ANY combination simultaneously thanks to superposition.</p>

                <p>This means a quantum computer with 300 qubits can process 2^300 states at once - more than the number of atoms in the observable universe.</p>

                <h2>Quantum Programming Concepts</h2>
                <p>Instead of if-else and loops, quantum programmers use:</p>
                <ul>
                    <li><strong>Gates</strong> - Operations that manipulate qubits (Hadamard gate creates superposition)</li>
                    <li><strong>Circuits</strong> - Sequences of gates (like a quantum algorithm)</li>
                    <li><strong>Measurement</strong> - Collapsing quantum states to classical bits</li>
                </ul>

                <h2>Quantum Languages and Frameworks</h2>
                <ul>
                    <li><strong>Qiskit</strong> (IBM's Python library) - Most popular, extensive documentation</li>
                    <li><strong>Cirq</strong> (Google's framework) - Built by the Sycamore team</li>
                    <li><strong>Microsoft Q#</strong> - Integrates with .NET, has quantum simulators</li>
                    <li><strong>Amazon Braket</strong> - Access multiple quantum computers through AWS</li>
                </ul>

                <h2>Example Quantum Program in Qiskit</h2>
                <pre><code>from qiskit import QuantumCircuit, execute, Aer

# Create circuit with 1 qubit and 1 classical bit
circuit = QuantumCircuit(1, 1)

# Put qubit into superposition
circuit.h(0)

# Measure the qubit
circuit.measure(0, 0)

# Run on quantum simulator
simulator = Aer.get_backend('qasm_simulator')
result = execute(circuit, simulator, shots=1000).result()

# Print results (approximately 50% 0, 50% 1)
counts = result.get_counts()
print(counts)</code></pre>

                <h2>Real Applications Coming Soon</h2>
                <ul>
                    <li><strong>Cryptography</strong> - Shor's algorithm could break RSA encryption</li>
                    <li><strong>Drug Discovery</strong> - Simulate molecular interactions perfectly</li>
                    <li><strong>Climate Modeling</strong> - Model complex weather systems</li>
                    <li><strong>Optimization</strong> - Solve traveling salesman for millions of cities</li>
                    <li><strong>Machine Learning</strong> - Quantum neural networks</li>
                </ul>

                <blockquote>Companies like Google, IBM, Microsoft, Amazon, and startups like IonQ and Rigetti already offer cloud access to real quantum computers.</blockquote>

                <p>You don't need to understand quantum physics to start. Qiskit abstracts the complexity. The quantum revolution is coming - and the first programmers will have a massive advantage.</p>

                <p>Ready to learn? IBM's Quantum Experience gives you free access to real quantum computers. The future is waiting.</p>
            `
        },
        'thompson-hack': {
            title: 'The Thompson Hack: The Most Genius (and Terrifying) Computer Virus Ever Created',
            date: '1983',
            author: 'Ken Thompson',
            readTime: 7,
            color: '#d35400',
            content: `
                <p>In 1983, Ken Thompson (yes, the same Thompson who helped create Unix) gave an acceptance speech for his Turing Award - the "Nobel Prize of Computing."</p>

                <p>His speech was titled "Reflections on Trusting Trust." It described a thought experiment that shocked the entire computer science world.</p>

                <h2>The Attack</h2>
                <p>Thompson imagined modifying the C compiler to do two things:</p>
                <ol>
                    <li>When compiling the Unix login program, insert a backdoor</li>
                    <li>When compiling the C compiler itself, insert code that continues this injection</li>
                </ol>

                <p>That's it. Two small changes to the compiler's source code.</p>

                <h2>The Genius Part</h2>
                <p>But here's the genius/terrifying part: You could remove those changes from the source code, recompile the compiler, and the backdoor would STILL exist.</p>

                <p>Because the binary compiler (the program you run) still has the malicious code. When it recompiles itself from clean source, it reinserts the backdoor.</p>

                <h2>Why This Is Unstoppable</h2>
                <p>Even if you review every line of source code (theoretically the ultimate security audit), you cannot detect this attack. The compiler binary is compromised, and it infects every program it touches.</p>

                <p>The only defense? Compile the compiler from source using a different, trusted compiler. Then compile it again. And again. Until you reach a compiler you trust completely.</p>

                <p>But how do you know THAT compiler isn't compromised?</p>

                <h2>The Aftermath</h2>
                <p>Thompson's speech demonstrated that absolute trust in software is impossible. You can never be 100% certain that your tools aren't betraying you.</p>

                <p>This isn't theoretical. In 1984, someone actually implemented Thompson's hack. The "login" backdoor appeared in BSD Unix source code. It took 5 years for anyone to notice.</p>

                <blockquote>Ken Thompson concluded with: "You can't trust code that you did not totally create yourself. No amount of source-level verification will protect you from using untrusted code."</blockquote>

                <p>Today, we solve this with reproducible builds and verified compilers. But the fundamental problem remains unsolved. Every line of code is an act of faith.</p>
            `
        },
        'rust-vs-cpp': {
            title: 'Rust vs C++: The Battle for Systems Programming Supremacy',
            date: '2024',
            author: 'Systems Team',
            readTime: 8,
            color: '#f74c00',
            content: `
                <p>For decades, C++ has been king of systems programming. But in 2015, Mozilla released Rust 1.0 - a language promising memory safety without garbage collection. Now, Microsoft, Google, and even the Linux kernel are adopting Rust.</p>

                <h2>The Problem with C++</h2>
                <p>C++ gives you tremendous power, but with great power comes great responsibility - and great bugs. Approximately 70% of security vulnerabilities in systems software are memory safety issues: use-after-free, buffer overflows, double frees.</p>

                <p>These bugs have caused everything from the Blaster worm to the Heartbleed vulnerability.</p>

                <h2>Rust's Solution: The Borrow Checker</h2>
                <p>Rust introduces the concept of ownership with a borrow checker that enforces memory safety at compile time. If your code might cause a memory bug, Rust won't compile it.</p>

                <pre><code>fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2
    
    // This would cause a compile error:
    // println!("{}", s1);
    
    println!("{}", s2);  // This works
}</code></pre>

                <h2>The Adoption Wave</h2>
                <ul>
                    <li><strong>Microsoft</strong> - Rewriting Windows components in Rust, created 1Password's backend</li>
                    <li><strong>Google</strong> - Rust in Android, Fuchsia OS, and Chrome components</li>
                    <li><strong>Linux Kernel</strong> - Rust support added in Linux 6.1</li>
                    <li><strong>Amazon</strong> - AWS uses Rust for performance-critical services</li>
                    <li><strong>Cloudflare</strong> - Pingora (their proxy framework) is written in Rust</li>
                </ul>

                <h2>Where C++ Still Wins</h2>
                <ul>
                    <li><strong>Maturity</strong> - Decades of libraries, tools, and expertise</li>
                    <li><strong>Game Development</strong> - Unreal Engine, most game engines are C++</li>
                    <li><strong>Legacy Systems</strong> - Billions of lines of C++ code in production</li>
                    <li><strong>Recruitment</strong> - Far more C++ developers exist</li>
                </ul>

                <h2>The Future</h2>
                <p>Most experts predict co-existence, not replacement. New projects, especially those requiring security, are choosing Rust. But the C++ ecosystem is too massive to disappear.</p>

                <blockquote>As one Microsoft engineer said: "We need a language that is 90% as fast as C++ but 100% safer. Rust is that language."</blockquote>

                <p>Learning both is becoming the standard for systems programmers. C++ for existing codebases and performance, Rust for new secure systems.</p>
            `
        },
        'python-async': {
            title: 'Async/Await in Python: The Complete Deep Dive',
            date: '2024',
            author: 'Python Async Team',
            readTime: 10,
            color: '#3776AB',
            content: `
                <p>Python 3.5 introduced async/await, changing how we write concurrent code. But how does it actually work under the hood?</p>

                <h2>The Event Loop</h2>
                <p>At the heart of asyncio is the event loop - a scheduler that runs coroutines. When a coroutine awaits something, it yields control back to the event loop, which can run other coroutines.</p>

                <pre><code>import asyncio

async def fetch_data():
    print("Starting fetch")
    await asyncio.sleep(2)  # Simulate I/O
    print("Fetch complete")
    return "data"

async def main():
    # Run multiple tasks concurrently
    results = await asyncio.gather(
        fetch_data(),
        fetch_data(),
        fetch_data()
    )
    print(results)

asyncio.run(main())</code></pre>

                <h2>Coroutines vs Threads</h2>
                <p>Threads use OS-level context switching (expensive). Coroutines are cooperative multitasking within a single thread (cheap). You can run 10,000 coroutines but not 10,000 threads.</p>

                <h2>The Awaitable Protocol</h2>
                <p>Any object with an <code>__await__</code> method can be awaited. This includes coroutines, futures, and tasks.</p>

                <pre><code>class CustomAwaitable:
    def __await__(self):
        yield from asyncio.sleep(1)
        return "result"

async def use_it():
    result = await CustomAwaitable()
    print(result)</code></pre>

                <h2>Common Patterns</h2>
                <ul>
                    <li><strong>gather()</strong> - Run multiple coroutines concurrently</li>
                    <li><strong>wait()</strong> - Wait with timeouts or conditions</li>
                    <li><strong>Queue</strong> - Producer/consumer patterns</li>
                    <li><strong>Semaphore</strong> - Limit concurrent operations</li>
                </ul>

                <h2>Real-World Libraries</h2>
                <ul>
                    <li><strong>aiohttp</strong> - Async HTTP client/server</li>
                    <li><strong>asyncpg</strong> - Async PostgreSQL driver (fastest)</li>
                    <li><strong>FastAPI</strong> - Async web framework</li>
                    <li><strong>aiofiles</strong> - Async file operations</li>
                </ul>

                <blockquote>Asynchronous programming is essential for I/O-bound applications. With async/await, Python can handle thousands of concurrent connections without breaking a sweat.</blockquote>

                <p>Remember: async is for I/O (network, disk, databases), not CPU-bound tasks. For CPU work, use multiprocessing.</p>
            `
        },
        'ai-history': {
            title: 'The Untold History of AI: From Turing to Transformers',
            date: '2024',
            author: 'AI History Project',
            readTime: 9,
            color: '#00a67e',
            content: `
                <p>AI isn't new. The dream of intelligent machines is nearly as old as computers themselves. Here's the 70-year journey that led to ChatGPT.</p>

                <h2>1950: The Turing Test</h2>
                <p>Alan Turing published "Computing Machinery and Intelligence," proposing the imitation game - what we now call the Turing Test. He asked a simple question: "Can machines think?"</p>

                <h2>1956: The Dartmouth Workshop</h2>
                <p>John McCarthy coined the term "Artificial Intelligence" at this legendary summer workshop. Optimism was high. They believed human-level AI was 20 years away. (Spoiler: it took longer.)</p>

                <h2>1966: ELIZA</h2>
                <p>Joseph Weizenbaum created ELIZA, a psychotherapist chatbot. Despite being a simple pattern-matching program, many users became emotionally attached. Weizenbaum was horrified.</p>

                <h2>1970s-80s: AI Winters</h2>
                <p>Promises unfulfilled led to funding cuts. Two "AI winters" froze research. Expert systems had some success but were too brittle for real-world complexity.</p>

                <h2>1997: Deep Blue vs Kasparov</h2>
                <p>IBM's Deep Blue beat world chess champion Garry Kasparov. First time a computer defeated a human world champion in a complex game.</p>

                <h2>2012: The Deep Learning Breakthrough</h2>
                <p>AlexNet crushed the ImageNet competition using GPUs and deep neural networks. This sparked the modern AI revolution.</p>

                <h2>2016: AlphaGo</h2>
                <p>DeepMind's AlphaGo beat Lee Sedol at Go - a game 10^100 times more complex than chess. The "impossible" milestone was achieved.</p>

                <h2>2020-Present: The Transformer Era</h2>
                <p>GPT-3, GPT-4, ChatGPT, Claude, Gemini - large language models based on the Transformer architecture have captured the world's imagination. AI can now write code, create art, and hold conversations.</p>

                <blockquote>From Turing's question to today's LLMs, AI has been a journey of 70+ years. The current excitement is real, but it's built on decades of incremental progress.</blockquote>

                <h2>What's Next?</h2>
                <ul>
                    <li><strong>Multimodal AI</strong> - Text, image, video, audio combined</li>
                    <li><strong>Agentic AI</strong> - AI that takes actions, not just answers</li>
                    <li><strong>Embodied AI</strong> - AI in robots that interact with the physical world</li>
                </ul>

                <p>The history of AI teaches us patience. Breakthroughs take decades, not years. But when they arrive, they change everything.</p>
            `
        },
        'memory-management': {
            title: 'Memory Management in C: Pointers, Allocation, and the Stack vs Heap',
            date: '2024',
            author: 'Memory Experts',
            readTime: 11,
            color: '#00599C',
            content: `
                <p>C gives you ultimate power over memory - and the ultimate responsibility. One wrong pointer can crash everything. Let's master memory management in C.</p>

                <h2>The Stack vs The Heap</h2>
                <p><strong>Stack</strong>: Fast, automatic, fixed size. Local variables live here. When a function ends, its stack memory is reclaimed automatically.</p>
                <p><strong>Heap</strong>: Slower, manual, flexible size. You control allocation and deallocation with malloc/free.</p>

                <pre><code>void example() {
    int stack_var = 42;  // Lives on stack
    
    int* heap_var = malloc(sizeof(int));  // Lives on heap
    *heap_var = 42;
    
    free(heap_var);  // YOU must free heap memory
}</code></pre>

                <h2>Common Allocation Functions</h2>
                <ul>
                    <li><strong>malloc(size)</strong> - Allocates raw memory, uninitialized</li>
                    <li><strong>calloc(count, size)</strong> - Allocates and zero-initializes</li>
                    <li><strong>realloc(ptr, new_size)</strong> - Resizes existing allocation</li>
                    <li><strong>free(ptr)</strong> - Releases heap memory</li>
                </ul>

                <h2>The Dangling Pointer Problem</h2>
                <pre><code>int* ptr = malloc(sizeof(int));
free(ptr);
// ptr is now DANGLING - don't use it!
*ptr = 42;  // UNDEFINED BEHAVIOR - crash or corruption

// Fix: Set to NULL after free
free(ptr);
ptr = NULL;</code></pre>

                <h2>Memory Leaks</h2>
                <p>Every malloc must have a matching free. Leaks accumulate until your program runs out of memory.</p>

                <pre><code>void leaky_function() {
    char* buffer = malloc(1024);
    // Oops, forgot to free!
    // Memory leak: 1024 bytes lost every call
}

void good_function() {
    char* buffer = malloc(1024);
    // Use buffer...
    free(buffer);  // Clean up
}</code></pre>

                <h2>Double Free</h2>
                <p>Freeing the same memory twice corrupts the heap allocator.</p>
                <pre><code>char* ptr = malloc(100);
free(ptr);
free(ptr);  // DOUBLE FREE - crash or corruption</code></pre>

                <h2>Tools for Memory Debugging</h2>
                <ul>
                    <li><strong>Valgrind</strong> - Detects leaks, double frees, invalid accesses</li>
                    <li><strong>Address Sanitizer</strong> - Compile-time instrumentation (fast)</li>
                    <li><strong>Clang Static Analyzer</strong> - Finds bugs before runtime</li>
                </ul>

                <h2>Modern Alternatives</h2>
                <p>Rust eliminates these bugs at compile time. C++ has smart pointers (unique_ptr, shared_ptr). But if you're in C, you need these skills.</p>

                <blockquote>Three rules of C memory management:
                <ol>
                    <li>Always initialize pointers to NULL</li>
                    <li>Every malloc needs a free</li>
                    <li>Set pointers to NULL after freeing</li>
                </ol>
                </blockquote>

                <p>Master these, and you'll understand 90% of production C bugs - and how to avoid them.</p>
            `
        }
    };

    const article = articles[id];

    if (!article) {
        return (
            <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: '60px 20px', textAlign: 'center' }}>
                <h1 style={{ color: 'var(--accent-cyan)' }}>Article Not Found</h1>
                <button onClick={() => navigate('/blog')} style={{
                    background: 'rgba(0,245,255,0.1)',
                    border: '1px solid var(--accent-cyan)',
                    color: 'var(--accent-cyan)',
                    padding: '10px 24px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    marginTop: '20px',
                }}>← Back to Blog</button>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{article.title} | CyberCode Blog</title>
                <meta name="description" content={`${article.title} - ${article.author} on CyberCode Blog`} />
            </Helmet>

            <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px' }}>
                    <button onClick={() => navigate('/blog')} style={{
                        background: 'rgba(0,245,255,0.1)',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        marginBottom: '32px',
                        fontFamily: 'var(--font-mono)',
                    }}>← BACK TO BLOG</button>

                    <div style={{
                        background: `linear-gradient(135deg, ${article.color}20, ${article.color}05)`,
                        borderRadius: '20px',
                        padding: '48px',
                        marginBottom: '32px',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            margin: '0 auto 24px',
                            background: `${article.color}20`,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <img
                                src={articles[id]?.image || `https://via.placeholder.com/60?text=${article.title[0]}`}
                                alt={article.title}
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                        <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '20px', lineHeight: '1.2' }}>
                            {article.title}
                        </h1>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
                            <span>📅 {article.date}</span>
                            <span>✍️ {article.author}</span>
                            <span>📖 {article.readTime} min read</span>
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(0, 20, 30, 0.6)',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                        borderRadius: '20px',
                        padding: '48px',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: 'var(--text-primary)',
                    }}
                         dangerouslySetInnerHTML={{ __html: article.content }} />

                    <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(0,245,255,0.2)', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Enjoyed this article? Share it with fellow developers.</p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            <button onClick={() => navigate('/blog')} style={{
                                background: 'rgba(0,245,255,0.1)',
                                border: '1px solid var(--accent-cyan)',
                                color: 'var(--accent-cyan)',
                                padding: '10px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                            }}>More Articles →</button>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
                                background: 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                                border: 'none',
                                color: '#000',
                                padding: '10px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}>↑ Back to Top</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}