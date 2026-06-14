const cLessons = [
    {
        id: 'c-01',
        title: 'Introduction to C',
        description: 'Understand the power and philosophy behind the C language.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is C?' },
            { type: 'text', content: 'C is a general-purpose, compiled systems programming language created by Dennis Ritchie at Bell Labs in 1972. It was designed as a tool to write the UNIX operating system, and it succeeded so well that nearly every operating system kernel, embedded firmware, and performance-critical system in existence is still written in C today.' },
            { type: 'text', content: 'Languages like C++, Java, Python, Rust, and Go all draw heavy inspiration from C\'s syntax and concepts. Learning C means learning the foundation that the entire software world is built upon.' },
            { type: 'note', content: 'C gives you direct control over hardware and memory — something almost no other modern language offers. With great power comes great responsibility: C will let you make mistakes that other languages silently prevent, such as reading invalid memory or overflowing a buffer.' },
            { type: 'heading', content: 'Why Learn C in 2025?' },
            { type: 'list', items: [
                    'Operating systems (Linux, Windows NT, macOS kernel) are written in C',
                    'Embedded systems, microcontrollers, and IoT devices run C firmware',
                    'C is the lingua franca of system interfaces — every OS exposes a C API',
                    'Understanding C makes you a dramatically better programmer in any language',
                    'Cybersecurity and reverse engineering require deep C knowledge',
                    'C compilers produce the fastest possible machine code for a given algorithm'
                ]},
            { type: 'heading', content: 'Your First C Program' },
            { type: 'text', content: 'By convention, every programmer\'s first program prints "Hello, World!" to the screen. In C it looks like this:' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}' },
            { type: 'heading', content: 'Compiling and Running' },
            { type: 'text', content: 'C is a compiled language. Unlike Python which is interpreted line by line, C source code must be translated entirely into machine code by a compiler before it can run. The most common compiler is GCC (GNU Compiler Collection).' },
            { type: 'code', content: '# Step 1 — Compile your source file into an executable:\ngcc main.c -o main\n\n# Step 2 — Run the compiled executable:\n./main\n\n# Compile with warnings enabled (recommended):\ngcc -Wall -Wextra main.c -o main' },
            { type: 'text', content: 'The -Wall and -Wextra flags enable extra compiler warnings that catch common bugs before they become runtime errors. Always develop with warnings enabled.' },
            { type: 'heading', content: 'Anatomy of a C Program' },
            { type: 'list', items: [
                    '#include <stdio.h> — tells the preprocessor to include the Standard Input/Output header, which declares printf, scanf, and file I/O functions',
                    'int main() — the entry point every C program must have; the OS calls main() to start execution',
                    'printf() — prints formatted text to stdout (your terminal)',
                    'return 0 — returns an exit code to the OS; 0 means success, any non-zero value signals an error',
                    'Semicolons — every statement in C must end with a semicolon',
                    'Curly braces {} — delimit blocks of code such as function bodies and loops'
                ]},
            { type: 'note', content: 'The C standard library is split into many headers: <stdio.h> for I/O, <stdlib.h> for memory and utilities, <string.h> for string manipulation, <math.h> for math functions, and more. You must #include the right header for every function you use.' },
        ],
        keyTakeaways: [
            'C is a compiled, low-level language that gives direct memory access',
            'Every C program starts with the main() function',
            'Statements must end with semicolons (;)',
            'Use #include to bring in standard library functionality',
            'Return 0 from main indicates successful program execution'
        ],
        exercises: [
            {
                id: 'ex-c01-1',
                title: 'Hello, Yourself',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Write a C program that prints "Hello, C programmer!" to the screen.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C programmer!\\n");\n    return 0;\n}',
                hints: ['Use printf() with a string argument.', 'Don\'t forget the newline \\n inside the string.'],
                example: 'printf("Hello, World!");'
            },
            {
                id: 'ex-c01-2',
                title: 'Personal Greeting',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Write a program that prints "Welcome to C programming, [YOUR_NAME]!" using two separate printf statements.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // First printf\n    // Second printf\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    printf("Welcome to C programming, ");\n    printf("John!\\n");\n    return 0;\n}',
                hints: ['Use two separate printf calls', 'Make sure to include the newline at the end'],
                example: 'printf("Hello ");\nprintf("World!\\n");'
            },
            {
                id: 'ex-c01-3',
                title: 'Multi-line Message',
                difficulty: 'beginner',
                points: 20,
                instructions: 'Write a program that prints a message split across three lines. The message should be: "Line 1\\nLine 2\\nLine 3"',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Print three lines\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\nLine 2\\nLine 3\\n");\n    return 0;\n}',
                hints: ['Use \\n for newlines', 'You can do this with one printf or multiple'],
                example: 'printf("First line\\nSecond line\\n");'
            }
        ]
    },
    {
        id: 'c-02',
        title: 'Variables & Data Types',
        description: 'Declare typed variables and understand memory sizes.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is a Variable?' },
            { type: 'text', content: 'A variable is a named location in memory that stores a value. In C, every variable must be explicitly declared with a type before it can be used. The type tells the compiler how many bytes to reserve in memory and how to interpret the stored bits.' },
            { type: 'text', content: 'Unlike Python or JavaScript, C will not automatically convert between types. You must be deliberate about what type holds what value.' },
            { type: 'heading', content: 'Declaring Variables' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 1.82;\n    char grade = \'A\';\n    double pi = 3.14159265358979;\n\n    printf("Age: %d\\n", age);\n    printf("Height: %.2f\\n", height);\n    printf("Grade: %c\\n", grade);\n    printf("Pi: %.10lf\\n", pi);\n    return 0;\n}' },
            { type: 'heading', content: 'Core Data Types' },
            { type: 'list', items: [
                    'char — 1 byte, stores a single ASCII character or a small integer (-128 to 127)',
                    'int — typically 4 bytes, stores whole numbers (-2,147,483,648 to 2,147,483,647)',
                    'float — 4 bytes, 32-bit floating-point number (~6-7 decimal digits of precision)',
                    'double — 8 bytes, 64-bit floating-point number (~15-16 decimal digits of precision)',
                    'long — typically 8 bytes on 64-bit systems, larger integer range',
                    'short — typically 2 bytes, smaller integer range',
                    'unsigned int — 4 bytes, only non-negative integers (0 to 4,294,967,295)'
                ]},
            { type: 'heading', content: 'Format Specifiers for printf' },
            { type: 'text', content: 'printf uses format specifiers as placeholders that get replaced by variable values. Using the wrong specifier causes undefined behavior and often produces garbage output.' },
            { type: 'code', content: '// printf format specifiers:\n// %d or %i  -> int\n// %u        -> unsigned int\n// %f        -> float (also works for double in printf)\n// %lf       -> double (use in scanf for double)\n// %c        -> char\n// %s        -> string (char array)\n// %p        -> pointer address\n// %x        -> hexadecimal integer\n// %o        -> octal integer\n// %zu       -> size_t (result of sizeof)\n\nprintf("Int: %d, Float: %.2f, Hex: %x\\n", 42, 3.14, 255);' },
            { type: 'heading', content: 'sizeof Operator' },
            { type: 'text', content: 'The sizeof operator returns the number of bytes a type or variable occupies on the current system. This is crucial for portable code because type sizes can vary between 32-bit and 64-bit platforms.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    printf("char:   %zu bytes\\n", sizeof(char));\n    printf("int:    %zu bytes\\n", sizeof(int));\n    printf("float:  %zu bytes\\n", sizeof(float));\n    printf("double: %zu bytes\\n", sizeof(double));\n    printf("long:   %zu bytes\\n", sizeof(long));\n    return 0;\n}' },
            { type: 'heading', content: 'Integer Overflow' },
            { type: 'text', content: 'When a calculation produces a result outside the range of a type, it wraps around silently. C does not throw an exception — it is your responsibility to prevent overflow.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    unsigned char x = 255;\n    x++;  // wraps around to 0!\n    printf("%d\\n", x);  // prints 0\n    return 0;\n}' },
            { type: 'note', content: 'Always use double over float unless memory is critical. The extra 4 bytes of precision prevent hard-to-diagnose rounding errors in financial and scientific calculations.' },
        ],
        keyTakeaways: [
            'C requires explicit variable type declaration',
            'Different data types use different amounts of memory',
            'Use the correct format specifier when printing variables',
            'sizeof operator tells you how many bytes a type uses',
            'Integer overflow happens silently - watch your ranges!'
        ],
        exercises: [
            {
                id: 'ex-c02-1',
                title: 'Declare and Print',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Declare an integer (age = 30), a float (weight = 65.5), and a character (initial = \'J\'). Print them using the correct format specifiers.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Declare variables\n\n    // Print them\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int age = 30;\n    float weight = 65.5;\n    char initial = \'J\';\n\n    printf("Age: %d\\n", age);\n    printf("Weight: %.1f\\n", weight);\n    printf("Initial: %c\\n", initial);\n    return 0;\n}',
                hints: ['Use %d for int, %f for float, %c for char.'],
                example: 'int x = 10;\nprintf("Value: %d", x);'
            },
            {
                id: 'ex-c02-2',
                title: 'Size Explorer',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Write a program that prints the size (in bytes) of: char, int, float, double, and long. Use the sizeof operator.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Print sizes\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    printf("char: %zu bytes\\n", sizeof(char));\n    printf("int: %zu bytes\\n", sizeof(int));\n    printf("float: %zu bytes\\n", sizeof(float));\n    printf("double: %zu bytes\\n", sizeof(double));\n    printf("long: %zu bytes\\n", sizeof(long));\n    return 0;\n}',
                hints: ['Use sizeof(type) inside printf', 'Use %zu format specifier for sizeof output'],
            },
            {
                id: 'ex-c02-3',
                title: 'Overflow Experiment',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Create an unsigned char variable set to 250. Then add 10 to it and print the result. Explain why you get the output you do.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    unsigned char x = 250;\n    // Add 10 to x\n    printf("Result: %d\\n", x);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    unsigned char x = 250;\n    x = x + 10;\n    printf("Result: %d\\n", x);\n    return 0;\n}',
                hints: ['unsigned char can only hold 0-255', '260 - 256 = 4', 'This is called integer overflow'],
            },
            {
                id: 'ex-c02-4',
                title: 'Mixed Type Operations',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Declare an int a = 10 and a float b = 3.5. Compute a / b and store in a float result. Print both the integer division and float division results.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    float b = 3.5;\n    // Calculate and print\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    float b = 3.5;\n    int intDiv = a / 3;\n    float floatDiv = a / b;\n    printf("10 / 3 = %d (integer division)\\n", intDiv);\n    printf("10 / 3.5 = %.2f (float division)\\n", floatDiv);\n    return 0;\n}',
                hints: ['Integer division truncates decimal part', 'When one operand is float, the result is float'],
            }
        ]
    },
    {
        id: 'c-03',
        title: 'Operators & Expressions',
        description: 'Perform arithmetic, comparisons, and logical operations.',
        completed: false,
        content: [
            { type: 'heading', content: 'Arithmetic Operators' },
            { type: 'text', content: 'C supports all standard arithmetic operations. A critical detail is integer division: dividing two integers truncates the decimal part entirely, which is a very common source of bugs.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int a = 17, b = 5;\n    printf("%d + %d = %d\\n", a, b, a + b);\n    printf("%d - %d = %d\\n", a, b, a - b);\n    printf("%d * %d = %d\\n", a, b, a * b);\n    printf("%d / %d = %d\\n", a, b, a / b);\n    printf("%d %% %d = %d\\n", a, b, a % b);\n    printf("%.2f / %d = %.4f\\n", (float)a, b, (float)a / b);\n    return 0;\n}' },
            { type: 'heading', content: 'Compound Assignment Operators' },
            { type: 'code', content: 'int x = 10;\nx += 5;\nx -= 3;\nx *= 2;\nx /= 4;\nx %= 4;' },
            { type: 'heading', content: 'Increment & Decrement' },
            { type: 'code', content: 'int x = 5;\nint a = x++;\nint b = ++x;\nint c = x--;\nprintf("a=%d b=%d c=%d x=%d\\n", a, b, c, x);' },
            { type: 'heading', content: 'Comparison Operators' },
            { type: 'code', content: 'int a = 10, b = 20;\nprintf("%d\\n", a == b);\nprintf("%d\\n", a != b);\nprintf("%d\\n", a < b);\nprintf("%d\\n", a >= b);' },
            { type: 'heading', content: 'Logical Operators' },
            { type: 'code', content: 'int a = 10, b = 20;\nprintf("%d\\n", a < 15 && b > 10);\nprintf("%d\\n", a > 15 || b > 10);\nprintf("%d\\n", !(a == 10));' },
            { type: 'note', content: 'Short-circuit evaluation: in && the right side is not evaluated if the left is false. In || the right side is not evaluated if the left is true.' },
        ],
        keyTakeaways: [
            'Integer division truncates decimal part',
            'Use % for modulus (remainder) operation',
            'Prefix vs postfix increment affects when the value changes',
            'Comparison operators return 1 (true) or 0 (false)',
            'Use parentheses to make operator precedence explicit'
        ],
        exercises: [
            {
                id: 'ex-c03-1',
                title: 'Temperature Converter',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Convert Celsius to Fahrenheit: F = C * 9/5 + 32',
                initialCode: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    float fahrenheit;\n    // Calculate and print\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    float fahrenheit = celsius * 9.0f / 5.0f + 32.0f;\n    printf("%.1f°C = %.1f°F\\n", celsius, fahrenheit);\n    return 0;\n}',
                hints: ['Use float division, not integer division', '9.0/5.0 not 9/5'],
                example: 'float result = 10.0 * 9.0 / 5.0 + 32.0;'
            },
            {
                id: 'ex-c03-2',
                title: 'Even or Odd',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Check if a number is even or odd using modulo operator.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int num = 17;\n    // Check and print\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int num = 17;\n    if (num % 2 == 0) {\n        printf("%d is Even\\n", num);\n    } else {\n        printf("%d is Odd\\n", num);\n    }\n    return 0;\n}',
                hints: ['Use % 2 to get remainder', 'If remainder is 0, number is even'],
            },
            {
                id: 'ex-c03-3',
                title: 'Postfix vs Prefix',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Demonstrate the difference between postfix and prefix increment operators.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int x = 5;\n    // Show x++ and ++x differences\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int x = 5;\n    printf("x++ = %d\\n", x++);\n    printf("++x = %d\\n", ++x);\n    printf("Final x = %d\\n", x);\n    return 0;\n}',
                hints: ['Postfix: use then increment', 'Prefix: increment then use'],
            }
        ]
    },
    {
        id: 'c-04',
        title: 'Control Flow',
        description: 'Direct program execution with conditions and loops.',
        completed: false,
        content: [
            { type: 'heading', content: 'If / Else If / Else' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n    if (score >= 90) {\n        printf("Grade: A\\n");\n    } else if (score >= 80) {\n        printf("Grade: B\\n");\n    } else if (score >= 70) {\n        printf("Grade: C\\n");\n    } else {\n        printf("Grade: F\\n");\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'For Loop' },
            { type: 'code', content: 'for (int i = 0; i < 5; i++) {\n    printf("Step %d\\n", i);\n}' },
            { type: 'heading', content: 'While Loop' },
            { type: 'code', content: 'int count = 0;\nwhile (count < 5) {\n    printf("Count: %d\\n", count);\n    count++;\n}' },
            { type: 'heading', content: 'Switch Statement' },
            { type: 'code', content: 'char grade = \'B\';\nswitch (grade) {\n    case \'A\':\n        printf("Excellent!\\n");\n        break;\n    case \'B\':\n        printf("Good job!\\n");\n        break;\n    default:\n        printf("Keep studying!\\n");\n}' },
            { type: 'note', content: 'Forgetting break in a switch causes "fallthrough" — execution continues into the next case. Always add break unless fallthrough is intentional.' },
        ],
        keyTakeaways: [
            'if-else statements control conditional execution',
            'for loops are best when iteration count is known',
            'while loops are best when condition determines continuation',
            'switch statements test a single variable against multiple constants',
            'Always include break statements in switch cases'
        ],
        exercises: [
            {
                id: 'ex-c04-1',
                title: 'Sum of Numbers',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Calculate the sum of numbers from 1 to 100 using a for loop.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    // Your loop here\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
                hints: ['Initialize sum to 0', 'Add i to sum each iteration', 'Answer should be 5050'],
            },
            {
                id: 'ex-c04-2',
                title: 'Grade Calculator',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Write a program that assigns letter grades based on numeric scores: A(90+), B(80-89), C(70-79), D(60-69), F(<60)',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n    // Determine and print grade\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n    if (score >= 90) printf("Grade: A\\n");\n    else if (score >= 80) printf("Grade: B\\n");\n    else if (score >= 70) printf("Grade: C\\n");\n    else if (score >= 60) printf("Grade: D\\n");\n    else printf("Grade: F\\n");\n    return 0;\n}',
                hints: ['Use else if ladder', 'Check from highest to lowest'],
            },
            {
                id: 'ex-c04-3',
                title: 'Multiplication Table',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Print the multiplication table for numbers 1 through 5 using nested for loops.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Nested loops for multiplication table\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        for (int j = 1; j <= 5; j++) {\n            printf("%2d ", i * j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
                hints: ['Use outer loop for rows', 'Inner loop for columns', 'Format output with %2d for alignment'],
            }
        ]
    },
    {
        id: 'c-05',
        title: 'Functions',
        description: 'Structure your code into reusable, callable blocks.',
        completed: false,
        content: [
            { type: 'heading', content: 'Defining Functions' },
            { type: 'code', content: 'int add(int a, int b) {\n    return a + b;\n}\n\nvoid greet(char name[]) {\n    printf("Hello, %s!\\n", name);\n}' },
            { type: 'heading', content: 'Function Prototypes' },
            { type: 'code', content: '#include <stdio.h>\n\nint multiply(int x, int y);  // prototype\n\nint main() {\n    int result = multiply(5, 3);\n    printf("%d\\n", result);\n    return 0;\n}\n\nint multiply(int x, int y) {\n    return x * y;\n}' },
            { type: 'heading', content: 'Pass by Value' },
            { type: 'code', content: 'void change(int x) {\n    x = 100;  // modifies local copy only\n}\n\nint main() {\n    int num = 5;\n    change(num);\n    printf("%d\\n", num);  // still 5!\n    return 0;\n}' },
            { type: 'note', content: 'In C, arguments are passed by value - the function receives a copy, not the original variable.' },
        ],
        keyTakeaways: [
            'Functions help organize code into reusable blocks',
            'Function prototypes declare functions before use',
            'C uses pass-by-value: parameters are copies',
            'Functions can return values or be void',
            'Keep functions focused on a single task'
        ],
        exercises: [
            {
                id: 'ex-c05-1',
                title: 'Max Function',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Write a function that returns the maximum of two integers.',
                initialCode: '#include <stdio.h>\n\n// Function prototype\n\nint main() {\n    printf("%d\\n", max(10, 20));\n    return 0;\n}\n\n// Function definition',
                solution: '#include <stdio.h>\n\nint max(int a, int b);\n\nint main() {\n    printf("%d\\n", max(10, 20));\n    return 0;\n}\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}',
                hints: ['Use ternary operator or if statement', 'Return the larger value'],
            },
            {
                id: 'ex-c05-2',
                title: 'Factorial Function',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Write a recursive function to calculate factorial.',
                initialCode: '#include <stdio.h>\n\nint factorial(int n) {\n    // Base case and recursive case\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5));\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5));\n    return 0;\n}',
                hints: ['Base case: n <= 1 returns 1', 'Recursive case: n * factorial(n-1)'],
            }
        ]
    },
    {
        id: 'c-06',
        title: 'Arrays & Strings',
        description: 'Store collections of data and work with text.',
        completed: false,
        content: [
            { type: 'heading', content: 'Arrays' },
            { type: 'code', content: 'int numbers[5] = {1, 2, 3, 4, 5};\nnumbers[2] = 99;\nfor (int i = 0; i < 5; i++) {\n    printf("%d ", numbers[i]);\n}' },
            { type: 'heading', content: 'Strings' },
            { type: 'code', content: 'char name[] = "Alice";\nprintf("Name: %s\\n", name);' },
            { type: 'heading', content: 'String Functions' },
            { type: 'code', content: '#include <string.h>\n\nchar str1[20] = "Hello";\nchar str2[] = " World";\nstrcat(str1, str2);\nint len = strlen(str1);\nif (strcmp(str1, "Hello World") == 0) {\n    printf("Equal!\\n");\n}' },
            { type: 'note', content: 'Strings in C are null-terminated character arrays. Always ensure your array has space for the null terminator \'\\0\'.' },
        ],
        keyTakeaways: [
            'Arrays store multiple values of the same type',
            'Array indices start at 0',
            'Strings are null-terminated char arrays',
            'Use string.h functions for string operations',
            'Never compare strings with ==, use strcmp()'
        ],
        exercises: [
            {
                id: 'ex-c06-1',
                title: 'Array Reversal',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Reverse an array in place without using a second array.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    // Reverse the array\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    for (int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
                hints: ['Swap first with last, second with second-last', 'Only loop to n/2'],
            },
            {
                id: 'ex-c06-2',
                title: 'String Palindrome',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Check if a string is a palindrome (reads same forwards and backwards).',
                initialCode: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "racecar";\n    // Check if palindrome\n    return 0;\n}',
                solution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "racecar";\n    int len = strlen(str);\n    int isPalindrome = 1;\n    for (int i = 0; i < len/2; i++) {\n        if (str[i] != str[len-1-i]) {\n            isPalindrome = 0;\n            break;\n        }\n    }\n    printf("%s is %s\\n", str, isPalindrome ? "a palindrome" : "not a palindrome");\n    return 0;\n}',
                hints: ['Compare first with last, second with second-last', 'Use strlen to get length'],
            }
        ]
    },
    {
        id: 'c-07',
        title: 'Pointers Basics',
        description: 'Understand memory addresses and indirection.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is a Pointer?' },
            { type: 'text', content: 'A pointer stores the memory address of another variable.' },
            { type: 'code', content: 'int value = 42;\nint *ptr = &value;\nprintf("Value: %d\\n", *ptr);\n*ptr = 100;\nprintf("Now: %d\\n", value);' },
            { type: 'heading', content: 'Null Pointers' },
            { type: 'code', content: 'int *ptr = NULL;\nif (ptr != NULL) {\n    *ptr = 10;\n}' },
            { type: 'heading', content: 'Pointers and Functions' },
            { type: 'code', content: 'void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}' },
            { type: 'note', content: 'Always initialize pointers. Dereferencing uninitialized pointers leads to undefined behavior.' },
        ],
        keyTakeaways: [
            'Pointers store memory addresses',
            'Use & to get address, * to dereference',
            'Always initialize pointers (or set to NULL)',
            'Check for NULL before dereferencing',
            'Pointers enable functions to modify caller variables'
        ],
        exercises: [
            {
                id: 'ex-c07-1',
                title: 'Swap Using Pointers',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Write a function that swaps two integers using pointers.',
                initialCode: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    // Implementation\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("x=%d, y=%d\\n", x, y);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("x=%d, y=%d\\n", x, y);\n    return 0;\n}',
                hints: ['Use a temporary variable to hold *a', 'Assign *a = *b, then *b = temp'],
            }
        ]
    },
    {
        id: 'c-08',
        title: 'Pointer Arithmetic & Arrays',
        description: 'Navigate arrays efficiently with pointer arithmetic.',
        completed: false,
        content: [
            { type: 'heading', content: 'Arrays and Pointers' },
            { type: 'code', content: 'int arr[5] = {10, 20, 30, 40, 50};\nint *ptr = arr;  // points to first element\nprintf("%d\\n", *ptr);      // 10\nptr++;\nprintf("%d\\n", *ptr);      // 20\nprintf("%d\\n", *(ptr+2));  // 40' },
            { type: 'heading', content: 'Pointer Subtraction' },
            { type: 'code', content: 'int *start = arr;\nint *end = arr + 5;\nint count = end - start;  // 5' },
            { type: 'note', content: 'Adding 1 to a pointer moves by the size of the pointed-to type, not 1 byte.' },
        ],
        keyTakeaways: [
            'Array name decays to pointer to first element',
            'arr[i] is equivalent to *(arr + i)',
            'Pointer arithmetic moves by element size, not bytes',
            'Subtracting pointers gives number of elements between them',
            'Pass array size separately to functions'
        ],
        exercises: [
            {
                id: 'ex-c08-1',
                title: 'Sum with Pointers',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Calculate sum of array elements using pointer arithmetic (no brackets).',
                initialCode: '#include <stdio.h>\n\nint sum_array(int *arr, int size) {\n    // Use pointer arithmetic\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    printf("Sum = %d\\n", sum_array(nums, 5));\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint sum_array(int *arr, int size) {\n    int sum = 0;\n    for (int *p = arr; p < arr + size; p++) {\n        sum += *p;\n    }\n    return sum;\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    printf("Sum = %d\\n", sum_array(nums, 5));\n    return 0;\n}',
                hints: ['Use a pointer that walks through the array', 'Stop when pointer reaches arr + size'],
            }
        ]
    },
    {
        id: 'c-09',
        title: 'Dynamic Memory Allocation',
        description: 'Allocate memory at runtime using malloc, calloc, and free.',
        completed: false,
        content: [
            { type: 'heading', content: 'malloc' },
            { type: 'code', content: 'int *arr = (int*)malloc(5 * sizeof(int));\nif (arr == NULL) {\n    printf("Allocation failed\\n");\n    return 1;\n}\narr[0] = 10;\nfree(arr);' },
            { type: 'heading', content: 'calloc' },
            { type: 'code', content: 'int *arr = (int*)calloc(5, sizeof(int));  // all elements zero-initialized' },
            { type: 'heading', content: 'realloc' },
            { type: 'code', content: 'int *tmp = (int*)realloc(arr, 10 * sizeof(int));\nif (tmp != NULL) {\n    arr = tmp;\n}' },
            { type: 'note', content: 'Always check if malloc/calloc returned NULL. Always free memory when done to prevent leaks.' },
        ],
        keyTakeaways: [
            'malloc allocates uninitialized memory',
            'calloc allocates zero-initialized memory',
            'realloc resizes existing allocations',
            'free releases memory back to the system',
            'Always check for allocation failure'
        ],
        exercises: [
            {
                id: 'ex-c09-1',
                title: 'Dynamic Array',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Ask user for array size, allocate dynamically, fill with squares, and print.',
                initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf("Enter size: ");\n    scanf("%d", &n);\n    // Allocate, fill, print, free\n    return 0;\n}',
                solution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf("Enter size: ");\n    scanf("%d", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    if (!arr) return 1;\n    for (int i = 0; i < n; i++) arr[i] = i * i;\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
                hints: ['Use malloc with n * sizeof(int)', 'Remember to free the memory'],
            }
        ]
    },
    {
        id: 'c-10',
        title: 'Structures and Unions',
        description: 'Group related data together into custom types.',
        completed: false,
        content: [
            { type: 'heading', content: 'Structures' },
            { type: 'code', content: 'struct Student {\n    char name[50];\n    int age;\n    float gpa;\n};\n\nstruct Student s1 = {"Alice", 20, 3.8};\nprintf("%s: %.1f\\n", s1.name, s1.gpa);' },
            { type: 'heading', content: 'typedef' },
            { type: 'code', content: 'typedef struct {\n    int x, y;\n} Point;\n\nPoint p1 = {10, 20};' },
            { type: 'heading', content: 'Arrow Operator' },
            { type: 'code', content: 'Point *ptr = &p1;\nptr->x = 30;  // same as (*ptr).x = 30' },
            { type: 'note', content: 'Use -> when accessing struct members through a pointer.' },
        ],
        keyTakeaways: [
            'Structures group different data types together',
            'typedef creates aliases for struct types',
            'Use . for direct access, -> for pointer access',
            'Structures can be passed to functions',
            'Unions share memory between members'
        ],
        exercises: [
            {
                id: 'ex-c10-1',
                title: 'Rectangle Structure',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Create a Rectangle struct with width and height, and a function to calculate area.',
                initialCode: '#include <stdio.h>\n\ntypedef struct {\n    // members\n} Rectangle;\n\nfloat area(Rectangle r) {\n    // implementation\n}\n\nint main() {\n    Rectangle rect = {5.0, 3.0};\n    printf("Area: %.1f\\n", area(rect));\n    return 0;\n}',
                solution: '#include <stdio.h>\n\ntypedef struct {\n    float width;\n    float height;\n} Rectangle;\n\nfloat area(Rectangle r) {\n    return r.width * r.height;\n}\n\nint main() {\n    Rectangle rect = {5.0, 3.0};\n    printf("Area: %.1f\\n", area(rect));\n    return 0;\n}',
                hints: ['Access members with dot operator', 'Area = width * height'],
            }
        ]
    },
    {
        id: 'c-11',
        title: 'File I/O',
        description: 'Read from and write to files on disk.',
        completed: false,
        content: [
            { type: 'heading', content: 'Writing to Files' },
            { type: 'code', content: 'FILE *fp = fopen("data.txt", "w");\nif (fp == NULL) {\n    perror("Error");\n    return 1;\n}\nfprintf(fp, "Hello, file!\\n");\nfclose(fp);' },
            { type: 'heading', content: 'Reading from Files' },
            { type: 'code', content: 'char line[100];\nFILE *fp = fopen("data.txt", "r");\nwhile (fgets(line, sizeof(line), fp) != NULL) {\n    printf("%s", line);\n}\nfclose(fp);' },
            { type: 'note', content: 'Always check if fopen returned NULL. Always fclose files when done.' },
        ],
        keyTakeaways: [
            'fopen opens files with different modes: r, w, a, r+, w+, a+',
            'Always check if fopen returns NULL',
            'fprintf writes formatted text to files',
            'fgets reads lines safely with buffer limit',
            'Always close files with fclose'
        ],
        exercises: [
            {
                id: 'ex-c11-1',
                title: 'Write and Read',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Write 5 numbers to a file, then read them back and calculate the sum.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Write numbers to file\n    // Read and sum\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("numbers.txt", "w");\n    if (!fp) return 1;\n    for (int i = 1; i <= 5; i++) fprintf(fp, "%d\\n", i);\n    fclose(fp);\n    \n    fp = fopen("numbers.txt", "r");\n    int num, sum = 0;\n    while (fscanf(fp, "%d", &num) == 1) sum += num;\n    fclose(fp);\n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
                hints: ['Open with "w" to write, "r" to read', 'Use fscanf to read numbers'],
            }
        ]
    },
    {
        id: 'c-12',
        title: 'Preprocessor Directives',
        description: 'Master #include, #define, macros, and conditional compilation.',
        completed: false,
        content: [
            { type: 'heading', content: 'Constants' },
            { type: 'code', content: '#define PI 3.14159\n#define MAX_BUFFER 1024' },
            { type: 'heading', content: 'Macros' },
            { type: 'code', content: '#define SQUARE(x) ((x) * (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))' },
            { type: 'heading', content: 'Conditional Compilation' },
            { type: 'code', content: '#ifdef DEBUG\n    printf("Debug mode on\\n");\n#endif' },
            { type: 'note', content: 'Always wrap macro parameters in parentheses to avoid precedence issues.' },
        ],
        keyTakeaways: [
            '#define creates constants and macros',
            'Macros are text substitution, not functions',
            'Wrap macro parameters in parentheses',
            'Use #ifdef for conditional compilation',
            'Include guards prevent multiple inclusion'
        ],
        exercises: [
            {
                id: 'ex-c12-1',
                title: 'Area Macro',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Define a macro to calculate circle area.',
                initialCode: '#include <stdio.h>\n#define PI 3.14159\n// Define AREA macro\n\nint main() {\n    printf("%.2f\\n", AREA(5.0));\n    return 0;\n}',
                solution: '#include <stdio.h>\n#define PI 3.14159\n#define AREA(r) (PI * (r) * (r))\n\nint main() {\n    printf("%.2f\\n", AREA(5.0));\n    return 0;\n}',
                hints: ['Wrap r in parentheses', 'Use PI * r * r'],
            }
        ]
    },
    {
        id: 'c-13',
        title: 'Function Pointers',
        description: 'Use pointers to functions for callbacks and flexible code.',
        completed: false,
        content: [
            { type: 'heading', content: 'Function Pointers' },
            { type: 'code', content: 'int add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\n\nint (*operation)(int, int);\noperation = add;\nprintf("%d\\n", operation(5, 3));\noperation = subtract;\nprintf("%d\\n", operation(5, 3));' },
            { type: 'heading', content: 'Array of Function Pointers' },
            { type: 'code', content: 'int (*ops[])(int, int) = {add, subtract, multiply};' },
            { type: 'note', content: 'Function pointers enable callbacks and runtime dispatch.' },
        ],
        keyTakeaways: [
            'Function pointers store addresses of functions',
            'Syntax: return_type (*name)(parameters)',
            'Used for callbacks and dispatch tables',
            'qsort uses function pointers for comparison',
            'Can create arrays of function pointers'
        ],
        exercises: [
            {
                id: 'ex-c13-1',
                title: 'Generic Apply',
                difficulty: 'advanced',
                points: 30,
                instructions: 'Write a function that applies a function pointer to each array element.',
                initialCode: '#include <stdio.h>\n\nvoid apply(int *arr, int size, int (*f)(int)) {\n    // Implementation\n}\n\nint square(int x) { return x * x; }\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    apply(arr, 4, square);\n    for (int i = 0; i < 4; i++) printf("%d ", arr[i]);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nvoid apply(int *arr, int size, int (*f)(int)) {\n    for (int i = 0; i < size; i++) {\n        arr[i] = f(arr[i]);\n    }\n}\n\nint square(int x) { return x * x; }\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    apply(arr, 4, square);\n    for (int i = 0; i < 4; i++) printf("%d ", arr[i]);\n    return 0;\n}',
                hints: ['Call f(arr[i]) and assign back to arr[i]', 'The function pointer parameter must match'],
            }
        ]
    },
    {
        id: 'c-14',
        title: 'Bitwise Operations',
        description: 'Manipulate individual bits for low‑level control.',
        completed: false,
        content: [
            { type: 'heading', content: 'Bitwise Operators' },
            { type: 'code', content: 'unsigned char a = 0b00110011;  // 51\nunsigned char b = 0b11001100;  // 204\n\nprintf("%d\\n", a & b);   // AND: 0\nprintf("%d\\n", a | b);   // OR: 255\nprintf("%d\\n", a ^ b);   // XOR: 255\nprintf("%d\\n", ~a);      // NOT: 204\nprintf("%d\\n", a << 1);   // Left shift: 102\nprintf("%d\\n", a >> 1);   // Right shift: 25' },
            { type: 'heading', content: 'Bit Flags' },
            { type: 'code', content: '#define FLAG_READ  (1 << 0)\n#define FLAG_WRITE (1 << 1)\n\nunsigned char flags = 0;\nflags |= FLAG_READ;\nif (flags & FLAG_READ) printf("Can read\\n");\nflags &= ~FLAG_WRITE;  // clear flag' },
            { type: 'note', content: 'Use unsigned types for bit manipulation to avoid implementation-defined behavior.' },
        ],
        keyTakeaways: [
            'Bitwise operators: & | ^ ~ << >>',
            'Use unsigned types for predictable behavior',
            'Bit flags pack multiple booleans into one integer',
            'Left shift multiplies by 2, right shift divides by 2',
            'Masking extracts specific bits'
        ],
        exercises: [
            {
                id: 'ex-c14-1',
                title: 'Even/Odd with Bitwise',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Check if a number is even or odd using bitwise AND (no modulo).',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int n = 17;\n    // Check using n & 1\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int n = 17;\n    if (n & 1) {\n        printf("%d is Odd\\n", n);\n    } else {\n        printf("%d is Even\\n", n);\n    }\n    return 0;\n}',
                hints: ['The LSB is 1 for odd numbers', 'Use n & 1 to test LSB'],
            },
            {
                id: 'ex-c14-2',
                title: 'Power of Two',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Check if a number is a power of two using bitwise operations.',
                initialCode: '#include <stdio.h>\n\nint is_power_of_two(unsigned int n) {\n    // Implementation\n}\n\nint main() {\n    printf("%d\\n", is_power_of_two(16));\n    printf("%d\\n", is_power_of_two(18));\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint is_power_of_two(unsigned int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}\n\nint main() {\n    printf("%d\\n", is_power_of_two(16));\n    printf("%d\\n", is_power_of_two(18));\n    return 0;\n}',
                hints: ['Power of two has exactly one bit set', 'n & (n-1) clears the lowest set bit'],
            }
        ]
    }
];

export default cLessons;