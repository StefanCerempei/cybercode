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
        exercises: [
            {
                id: 'ex-c01-1',
                title: 'Hello, Yourself',
                instructions: 'Write a C program that prints "Hello, C programmer!" to the screen.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C programmer!\\n");\n    return 0;\n}',
                hints: ['Use printf() with a string argument.', 'Don\'t forget the newline \\n inside the string.']
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
        exercises: [
            {
                id: 'ex-c02-1',
                title: 'Declare and Print',
                instructions: 'Declare an integer (age = 30), a float (weight = 65.5), and a character (initial = \'J\'). Print them using the correct format specifiers.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Declare variables\n\n    // Print them\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int age = 30;\n    float weight = 65.5;\n    char initial = \'J\';\n\n    printf("Age: %d\\n", age);\n    printf("Weight: %.1f\\n", weight);\n    printf("Initial: %c\\n", initial);\n    return 0;\n}',
                hints: ['Use %d for int, %f for float, %c for char.']
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
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int a = 17, b = 5;\n    printf("%d + %d = %d\\n", a, b, a + b);  // 22\n    printf("%d - %d = %d\\n", a, b, a - b);  // 12\n    printf("%d * %d = %d\\n", a, b, a * b);  // 85\n    printf("%d / %d = %d\\n", a, b, a / b);  // 3, NOT 3.4!\n    printf("%d %% %d = %d\\n", a, b, a % b); // 2 (remainder)\n\n    // To get real division, use float:\n    printf("%.2f / %d = %.4f\\n", (float)a, b, (float)a / b); // 3.4000\n    return 0;\n}' },
            { type: 'heading', content: 'Compound Assignment Operators' },
            { type: 'text', content: 'These operators combine an arithmetic operation with assignment, making code more concise.' },
            { type: 'code', content: 'int x = 10;\nx += 5;   // x = x + 5  -> 15\nx -= 3;   // x = x - 3  -> 12\nx *= 2;   // x = x * 2  -> 24\nx /= 4;   // x = x / 4  -> 6\nx %= 4;   // x = x % 4  -> 2' },
            { type: 'heading', content: 'Increment & Decrement' },
            { type: 'text', content: 'The ++ and -- operators add or subtract 1. The position (prefix vs postfix) matters when the expression is part of a larger statement.' },
            { type: 'code', content: 'int x = 5;\nint a = x++;  // a = 5, THEN x becomes 6 (post-increment)\nint b = ++x;  // x becomes 7 first, THEN b = 7 (pre-increment)\nint c = x--;  // c = 7, THEN x becomes 6 (post-decrement)\n\nprintf("a=%d b=%d c=%d x=%d\\n", a, b, c, x); // 5 7 7 6' },
            { type: 'heading', content: 'Comparison Operators' },
            { type: 'text', content: 'Comparisons return an integer: 1 for true, 0 for false. C has no native boolean type (before C99) — any non-zero value is considered true.' },
            { type: 'code', content: 'int a = 10, b = 20;\nprintf("%d\\n", a == b);  // 0 (false)\nprintf("%d\\n", a != b);  // 1 (true)\nprintf("%d\\n", a < b);   // 1 (true)\nprintf("%d\\n", a >= b);  // 0 (false)\n\n// Common mistake — assignment instead of comparison:\nif (a = 5) { /* This always executes! a is set to 5 */ }\nif (a == 5) { /* Correct comparison */ }' },
            { type: 'heading', content: 'Logical Operators' },
            { type: 'code', content: 'int a = 10, b = 20;\n\n// && (AND) — both must be true\nprintf("%d\\n", a < 15 && b > 10);   // 1\nprintf("%d\\n", a > 15 && b > 10);   // 0\n\n// || (OR) — at least one must be true\nprintf("%d\\n", a > 15 || b > 10);   // 1\n\n// ! (NOT) — inverts truth value\nprintf("%d\\n", !(a == 10));          // 0' },
            { type: 'heading', content: 'Operator Precedence' },
            { type: 'text', content: 'C evaluates operators in a specific order, similar to math. Multiplication and division happen before addition and subtraction. Use parentheses to make intent explicit and avoid subtle bugs.' },
            { type: 'code', content: 'int result = 2 + 3 * 4;      // 14, not 20\nint clear  = (2 + 3) * 4;   // 20, parentheses force addition first\nint tricky = 1 + 2 > 0;     // 1 (comparison binds tighter than you think)\nprintf("%d %d %d\\n", result, clear, tricky);' },
            { type: 'note', content: 'Short-circuit evaluation: in && the right side is not evaluated if the left is false. In || the right side is not evaluated if the left is true. This is useful for null pointer guards: if (ptr != NULL && ptr->value > 0).' },
        ],
        exercises: [
            {
                id: 'ex-c03-1',
                title: 'Temperature Converter',
                instructions: 'Write a program that converts Celsius to Fahrenheit using the formula: F = C * 9/5 + 32. Use float variables.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    // Calculate fahrenheit\n    printf("%.1f°C = %.1f°F\\n", celsius, fahrenheit);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    float fahrenheit = celsius * 9.0f / 5.0f + 32.0f;\n    printf("%.1f°C = %.1f°F\\n", celsius, fahrenheit);\n    return 0;\n}',
                hints: ['Integer division truncates — use float or double.', '9/5 with integers yields 1, not 1.8.']
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
            { type: 'text', content: 'The if statement is the fundamental decision-making tool. C evaluates the condition and executes the corresponding block. Any non-zero value is considered true.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n\n    if (score >= 90) {\n        printf("Grade: A\\n");\n    } else if (score >= 80) {\n        printf("Grade: B\\n");  // This executes\n    } else if (score >= 70) {\n        printf("Grade: C\\n");\n    } else {\n        printf("Grade: F\\n");\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'The Ternary Operator' },
            { type: 'text', content: 'For simple if/else assignments, the ternary operator provides a compact one-line alternative.' },
            { type: 'code', content: 'int x = 10;\nchar *result = (x > 5) ? "big" : "small";\nprintf("%s\\n", result);  // "big"\n\n// Equivalent to:\nchar *result2;\nif (x > 5) result2 = "big";\nelse result2 = "small";' },
            { type: 'heading', content: 'For Loop' },
            { type: 'text', content: 'The for loop is ideal when you know in advance how many iterations you need. It combines initialization, condition, and update in a single line.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    // Basic counting loop\n    for (int i = 0; i < 5; i++) {\n        printf("Step %d\\n", i);  // 0, 1, 2, 3, 4\n    }\n\n    // Count backwards\n    for (int i = 10; i >= 0; i -= 2) {\n        printf("%d ", i);  // 10 8 6 4 2 0\n    }\n\n    // Nested loops — multiplication table\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            printf("%d*%d=%d  ", i, j, i*j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'While Loop' },
            { type: 'text', content: 'The while loop is used when the number of iterations is unknown ahead of time — for example, reading user input until a sentinel value is entered.' },
            { type: 'code', content: 'int count = 0;\nwhile (count < 5) {\n    printf("Count: %d\\n", count);\n    count++;\n}\n\n// do-while: body executes at least once\nint n;\ndo {\n    printf("Enter a positive number: ");\n    scanf("%d", &n);\n} while (n <= 0);' },
            { type: 'heading', content: 'Break and Continue' },
            { type: 'text', content: 'break exits a loop immediately. continue skips the rest of the current iteration and jumps to the next one.' },
            { type: 'code', content: '// break — exit when target found\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) break;\n    printf("%d ", i);  // 0 1 2 3 4\n}\n\n// continue — skip even numbers\nfor (int i = 0; i < 10; i++) {\n    if (i % 2 == 0) continue;\n    printf("%d ", i);  // 1 3 5 7 9\n}' },
            { type: 'heading', content: 'Switch Statement' },
            { type: 'text', content: 'Switch tests a single integer (or char) against multiple constant values. It is faster than a long chain of else-if and is cleaner when you have many discrete cases.' },
            { type: 'code', content: 'char grade = \'B\';\n\nswitch (grade) {\n    case \'A\':\n        printf("Excellent! 90-100\\n");\n        break;  // MUST break to prevent fallthrough\n    case \'B\':\n        printf("Good job! 80-89\\n");\n        break;\n    case \'C\':\n        printf("Pass. 70-79\\n");\n        break;\n    case \'D\':\n    case \'F\':  // intentional fallthrough — both handled the same\n        printf("Fail. Study harder.\\n");\n        break;\n    default:\n        printf("Invalid grade\\n");\n}' },
            { type: 'note', content: 'Forgetting break in a switch causes "fallthrough" — execution continues into the next case. This is a very common C bug. Always add break unless fallthrough is intentional, and comment it clearly.' },
        ],
        exercises: [
            {
                id: 'ex-c04-1',
                title: 'Sum of Numbers',
                instructions: 'Use a for loop to compute the sum of numbers from 1 to 100. Print the result.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    // Your loop here\n    printf("Sum 1..100 = %d\\n", sum);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("Sum 1..100 = %d\\n", sum);\n    return 0;\n}',
                hints: ['Initialize sum to 0.', 'Add each i to sum inside the loop.', 'The answer should be 5050.']
            }
        ]
    },
    {
        id: 'c-05',
        title: 'Functions',
        description: 'Structure your code into reusable, callable blocks.',
        completed: false,
        content: [
            { type: 'heading', content: 'Why Functions?' },
            { type: 'text', content: 'Functions are the primary tool for organizing C programs. A well-designed function does exactly one thing, has a descriptive name, and can be tested in isolation. Programs built from small focused functions are easier to read, debug, and maintain.' },
            { type: 'text', content: 'Every C program already uses at least one function: main(). The standard library you have been calling — printf, scanf — are also just functions defined in headers.' },
            { type: 'heading', content: 'Defining and Calling Functions' },
            { type: 'code', content: '#include <stdio.h>\n\n// Function declaration (prototype) — tells compiler the signature\nint add(int a, int b);\nvoid print_banner(void);\n\nint main() {\n    print_banner();\n    int result = add(10, 25);\n    printf("10 + 25 = %d\\n", result);\n    return 0;\n}\n\n// Function definitions\nint add(int a, int b) {\n    return a + b;\n}\n\nvoid print_banner(void) {\n    printf("=== C Calculator ===\\n");\n}' },
            { type: 'heading', content: 'Parameters are Copies (Pass by Value)' },
            { type: 'text', content: 'In C, function arguments are passed by value — the function receives a copy of the variable, not the original. Modifying a parameter inside a function does not affect the caller\'s variable.' },
            { type: 'code', content: 'void try_to_double(int x) {\n    x = x * 2;  // modifies the LOCAL copy only\n    printf("inside: %d\\n", x);\n}\n\nint main() {\n    int val = 5;\n    try_to_double(val);\n    printf("outside: %d\\n", val);  // still 5!\n    return 0;\n}' },
            { type: 'heading', content: 'Void Functions' },
            { type: 'code', content: 'void greet(char name[]) {\n    printf("Hello, %s! Welcome to C.\\n", name);\n}\n\n// Calling:\ngreet("Alex");\ngreet("World");' },
            { type: 'heading', content: 'Recursive Functions' },
            { type: 'text', content: 'A recursive function calls itself. Every recursion needs a base case — a condition that stops the chain — otherwise it recurses forever and causes a stack overflow.' },
            { type: 'code', content: 'int factorial(int n) {\n    if (n <= 1) return 1;          // base case\n    return n * factorial(n - 1);   // recursive case\n}\n\n// How it unwinds for factorial(4):\n// factorial(4) = 4 * factorial(3)\n//              = 4 * 3 * factorial(2)\n//              = 4 * 3 * 2 * factorial(1)\n//              = 4 * 3 * 2 * 1 = 24\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}' },
            { type: 'heading', content: 'Function Prototypes' },
            { type: 'text', content: 'In C, a function must be declared before it is called. A prototype gives the compiler the return type and parameter types so it can validate your calls before it sees the full definition. Placing prototypes at the top of a file is standard practice.' },
            { type: 'note', content: 'Keep functions short — ideally under 40 lines. If a function is doing too many things, split it. Name functions with verbs: calculate_area(), read_input(), print_result().' },
        ],
        exercises: [
            {
                id: 'ex-c05-1',
                title: 'Max of Two',
                instructions: 'Write a function `int max(int a, int b)` that returns the larger number. Call it from main with test values.',
                initialCode: '#include <stdio.h>\n\n// Function prototype\n\nint main() {\n    printf("%d\\n", max(10, 20));\n    printf("%d\\n", max(99, 42));\n    return 0;\n}\n\n// Function definition',
                solution: '#include <stdio.h>\n\nint max(int a, int b);\n\nint main() {\n    printf("%d\\n", max(10, 20));\n    printf("%d\\n", max(99, 42));\n    return 0;\n}\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}',
                hints: ['Use an if statement or the ternary operator inside the function.']
            }
        ]
    },
    {
        id: 'c-06',
        title: 'Arrays & Strings',
        description: 'Store collections of data and work with text.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is an Array?' },
            { type: 'text', content: 'An array is a contiguous block of memory holding multiple values of the same type. Elements are stored back-to-back, so accessing any element by index is O(1) — instant regardless of array size.' },
            { type: 'heading', content: 'Declaring and Initializing Arrays' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    // Declare with explicit size\n    int numbers[5] = {10, 20, 30, 40, 50};\n\n    // Size inferred from initializer\n    float temps[] = {36.6, 37.1, 38.2, 36.9};\n\n    // Partial initialization — rest filled with 0\n    int zeros[10] = {0};  // all 10 elements = 0\n\n    // Modify an element\n    numbers[2] = 99;\n\n    // Print all elements\n    for (int i = 0; i < 5; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'Arrays and Memory' },
            { type: 'text', content: 'Array indices start at 0, not 1. The last valid index is always size-1. Accessing an array out of bounds (index >= size) is undefined behavior — C will not throw an error, but your program may crash or produce corrupted data silently.' },
            { type: 'code', content: 'int arr[5];  // valid indices: 0, 1, 2, 3, 4\narr[5] = 99; // UNDEFINED BEHAVIOR — writing past the end!\n\n// Always check bounds:\nint n = 5;\nfor (int i = 0; i < n; i++) {  // i < n, not i <= n\n    arr[i] = i * 2;\n}' },
            { type: 'heading', content: 'Multidimensional Arrays' },
            { type: 'code', content: 'int matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Access row 1, column 2:\nprintf("%d\\n", matrix[1][2]);  // 6\n\n// Iterate:\nfor (int r = 0; r < 3; r++) {\n    for (int c = 0; c < 3; c++) {\n        printf("%d ", matrix[r][c]);\n    }\n    printf("\\n");\n}' },
            { type: 'heading', content: 'Strings as Character Arrays' },
            { type: 'text', content: 'In C there is no built-in string type. A string is simply an array of char values terminated by a null character (\'\\0\'). This null terminator is what tells string functions where the string ends.' },
            { type: 'code', content: 'char greeting[6] = {\'H\',\'e\',\'l\',\'l\',\'o\',\'\\0\'};\nchar name[] = "Alice";  // compiler adds \\0 automatically\n\n// name has 6 elements: A, l, i, c, e, \\0\nprintf("Length of name: %zu\\n", sizeof(name));  // 6\n\nprintf("%s %s\\n", greeting, name);' },
            { type: 'heading', content: 'Common String Functions' },
            { type: 'code', content: '#include <string.h>\n\nchar src[20] = "World";\nchar dest[20];\n\nstrcpy(dest, src);           // copy src into dest\nstrcat(dest, "!");           // append "!" to dest -> "World!"\nint len = strlen(dest);      // 6 (does NOT count \\0)\n\n// Compare two strings (not with ==!)\nif (strcmp("abc", "abc") == 0) printf("Equal\\n");\nif (strcmp("abc", "xyz") < 0)  printf("abc comes first\\n");\n\n// Find a substring\nchar *pos = strstr("Hello World", "World");\nif (pos) printf("Found at offset %ld\\n", pos - "Hello World");' },
            { type: 'note', content: 'Never compare strings with ==. That compares pointer addresses, not content. Always use strcmp(). Similarly, never copy strings with = — use strcpy() or the safer strncpy().' },
        ],
        exercises: [
            {
                id: 'ex-c06-1',
                title: 'Reverse an Array',
                instructions: 'Write a program that reverses an integer array in place. Print the array before and after.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    // Reverse logic here\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    for (int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
                hints: ['Swap arr[i] with arr[n-1-i] using a temp variable.', 'Only loop to n/2 — you swap both ends at once.']
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
            { type: 'text', content: 'Every variable lives at a specific address in RAM. A pointer is a variable that stores one of those addresses — it "points to" another variable. This is the feature that gives C its power and its danger.' },
            { type: 'text', content: 'Pointers allow you to: modify variables across function boundaries, navigate arrays at the hardware level, allocate memory dynamically at runtime, and build complex data structures like linked lists and trees.' },
            { type: 'heading', content: 'Address-of and Dereference Operators' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int value = 42;\n    int *ptr = &value;   // & = "address of"\n\n    printf("value    = %d\\n",  value);       // 42\n    printf("&value   = %p\\n",  (void*)&value); // e.g. 0x7ffd1234\n    printf("ptr      = %p\\n",  (void*)ptr);    // same address\n    printf("*ptr     = %d\\n",  *ptr);          // 42 — dereference\n\n    *ptr = 100;   // write through the pointer\n    printf("value is now %d\\n", value);  // 100\n    return 0;\n}' },
            { type: 'heading', content: 'Pointer Types Matter' },
            { type: 'text', content: 'A pointer must match the type of the variable it points to. The type tells the compiler how many bytes to read or write when you dereference.' },
            { type: 'code', content: 'int    n = 42;\ndouble pi = 3.14;\nchar   ch = \'Z\';\n\nint    *pn  = &n;   // int pointer\ndouble *ppi = &pi;  // double pointer — reads 8 bytes\nchar   *pch = &ch;  // char pointer — reads 1 byte\n\n// Reading the wrong type causes undefined behavior:\n// double *wrong = (double*)&n;  // dangerous!' },
            { type: 'heading', content: 'Null Pointer' },
            { type: 'text', content: 'A null pointer (NULL) is a pointer that does not point to anything. Dereferencing NULL causes an immediate crash (segmentation fault) — which is actually good because it makes the bug obvious.' },
            { type: 'code', content: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p = NULL;  // safe initialization\n\n    // Always check before dereferencing!\n    if (p != NULL) {\n        printf("%d\\n", *p);\n    } else {\n        printf("Pointer is null — cannot dereference\\n");\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'Pointers and Functions' },
            { type: 'text', content: 'Since C passes by value, the only way to let a function modify a caller\'s variable is to pass a pointer to that variable.' },
            { type: 'code', content: 'void increment(int *x) {\n    (*x)++;  // parentheses needed: *x++ would increment the pointer\n}\n\nint main() {\n    int val = 10;\n    increment(&val);\n    printf("%d\\n", val);  // 11\n    return 0;\n}' },
            { type: 'note', content: 'A pointer itself is just an integer large enough to hold a memory address (4 bytes on 32-bit, 8 bytes on 64-bit). The type attached to the pointer (int*, char*, etc.) only affects how many bytes get read/written on dereference.' },
        ],
        exercises: [
            {
                id: 'ex-c07-1',
                title: 'Swap Using Pointers',
                instructions: 'Write a function `void swap(int *a, int *b)` that swaps two integers using pointers. Test it in main.',
                initialCode: '#include <stdio.h>\n\nvoid swap(int *a, int *b);\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("x=%d, y=%d\\n", x, y);  // should print x=10, y=5\n    return 0;\n}\n\n// Define swap here',
                solution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("x=%d, y=%d\\n", x, y);\n    return 0;\n}',
                hints: ['Use a temporary int to hold *a.', 'Assign *a = *b, then *b = temp.']
            }
        ]
    },
    {
        id: 'c-08',
        title: 'Pointer Arithmetic & Arrays',
        description: 'Navigate arrays efficiently with pointer arithmetic.',
        completed: false,
        content: [
            { type: 'heading', content: 'Arrays and Pointers are Closely Related' },
            { type: 'text', content: 'In C, the name of an array decays to a pointer to its first element in most expressions. This means array indexing arr[i] is literally equivalent to *(arr + i) — the compiler translates both identically.' },
            { type: 'heading', content: 'Pointer Arithmetic' },
            { type: 'text', content: 'Adding 1 to a pointer does not add 1 byte — it adds the size of the pointed-to type. So incrementing an int* moves 4 bytes forward; incrementing a double* moves 8 bytes.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int *ptr = arr;  // ptr -> arr[0]\n\n    printf("%d\\n", *ptr);       // 10\n    ptr++;                       // advance by sizeof(int) = 4 bytes\n    printf("%d\\n", *ptr);       // 20\n    printf("%d\\n", *(ptr + 2)); // 40 — two elements ahead\n\n    // arr[i] == *(arr + i)  always\n    printf("%d == %d\\n", arr[3], *(arr + 3));  // 40 == 40\n    return 0;\n}' },
            { type: 'heading', content: 'Iterating an Array with a Pointer' },
            { type: 'code', content: 'int arr[] = {5, 12, 3, 8, 1};\nint n = 5;\n\n// Using index:\nfor (int i = 0; i < n; i++)\n    printf("%d ", arr[i]);\n\n// Using pointer (equivalent, sometimes faster):\nfor (int *p = arr; p < arr + n; p++)\n    printf("%d ", *p);\n\n// Finding max with a pointer:\nint *max = arr;\nfor (int *p = arr + 1; p < arr + n; p++)\n    if (*p > *max) max = p;\nprintf("Max = %d\\n", *max);' },
            { type: 'heading', content: 'Pointer Subtraction' },
            { type: 'text', content: 'Subtracting two pointers of the same type gives the number of elements between them, not bytes.' },
            { type: 'code', content: 'int arr[10];\nint *start = arr;\nint *end = arr + 7;\nptrdiff_t count = end - start;  // 7, not 28\nprintf("Elements between: %td\\n", count);' },
            { type: 'heading', content: 'Passing Arrays to Functions' },
            { type: 'text', content: 'When you pass an array to a function, it decays to a pointer to the first element. The function cannot determine the array\'s size from the pointer alone — you must pass the size as a separate parameter.' },
            { type: 'code', content: 'double average(int *arr, int n) {\n    int sum = 0;\n    for (int *p = arr; p < arr + n; p++)\n        sum += *p;\n    return (double)sum / n;\n}\n\nint main() {\n    int data[] = {10, 20, 30, 40};\n    printf("Average: %.2f\\n", average(data, 4));  // 25.00\n    return 0;\n}' },
            { type: 'note', content: 'sizeof(arr) inside a function that received arr as a parameter returns the size of a pointer (8 bytes), not the size of the array. sizeof only works correctly on a real array declaration, not a pointer.' },
        ],
        exercises: [
            {
                id: 'ex-c08-1',
                title: 'Sum via Pointer',
                instructions: 'Write a function that returns the sum of an integer array using pointer arithmetic — no [] indexing allowed.',
                initialCode: '#include <stdio.h>\n\nint sum_array(int *arr, int size) {\n    // Use pointer arithmetic only\n}\n\nint main() {\n    int nums[] = {4, 7, 1, 9};\n    printf("Sum = %d\\n", sum_array(nums, 4));  // 21\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint sum_array(int *arr, int size) {\n    int total = 0;\n    for (int *p = arr; p < arr + size; p++)\n        total += *p;\n    return total;\n}\n\nint main() {\n    int nums[] = {4, 7, 1, 9};\n    printf("Sum = %d\\n", sum_array(nums, 4));\n    return 0;\n}',
                hints: ['Use a pointer p that starts at arr and walks to arr + size.', 'Dereference with *p to read each element.']
            }
        ]
    },
    {
        id: 'c-09',
        title: 'Dynamic Memory Allocation',
        description: 'Allocate memory at runtime using malloc, calloc, and free.',
        completed: false,
        content: [
            { type: 'heading', content: 'Stack vs Heap Memory' },
            { type: 'text', content: 'C programs use two regions of memory. The stack holds local variables — it is fast but limited in size and automatically freed when a function returns. The heap is a large pool for data that must outlive the function that creates it or whose size is not known at compile time.' },
            { type: 'text', content: 'Dynamic allocation puts data on the heap. You request memory with malloc/calloc and release it with free when done. If you forget to free — that is a memory leak.' },
            { type: 'heading', content: 'malloc — Allocate Uninitialized Memory' },
            { type: 'code', content: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n\n    // ALWAYS check for allocation failure\n    if (arr == NULL) {\n        fprintf(stderr, "Memory allocation failed\\n");\n        return 1;\n    }\n\n    for (int i = 0; i < n; i++)\n        arr[i] = (i + 1) * 10;  // 10 20 30 40 50\n\n    for (int i = 0; i < n; i++)\n        printf("%d ", arr[i]);\n\n    free(arr);   // release back to the OS\n    arr = NULL;  // good practice — prevents use-after-free\n    return 0;\n}' },
            { type: 'heading', content: 'calloc — Allocate Zero-Initialized Memory' },
            { type: 'code', content: '// calloc(count, size) — allocates count*size bytes, all set to 0\nint *scores = (int*)calloc(100, sizeof(int));\n// All 100 elements guaranteed to be 0\n\n// malloc does NOT initialize — may contain garbage:\nint *raw = (int*)malloc(100 * sizeof(int));\n// raw[0] could be anything!' },
            { type: 'heading', content: 'realloc — Resize an Allocation' },
            { type: 'text', content: 'realloc resizes a previously allocated block. It may move the data to a new location in memory and returns the new pointer. If it fails, it returns NULL — so always capture the return in a temporary variable.' },
            { type: 'code', content: 'int *buf = (int*)malloc(3 * sizeof(int));\nbuf[0] = 1; buf[1] = 2; buf[2] = 3;\n\n// Grow to 6 elements\nint *tmp = (int*)realloc(buf, 6 * sizeof(int));\nif (tmp == NULL) {\n    free(buf);  // original still valid if realloc fails\n    return 1;\n}\nbuf = tmp;  // safe to reassign now\nbuf[3] = 4; buf[4] = 5; buf[5] = 6;\nfree(buf);' },
            { type: 'heading', content: 'Common Memory Bugs' },
            { type: 'list', items: [
                    'Memory leak — allocating with malloc but never calling free',
                    'Use-after-free — reading/writing a pointer after it has been freed',
                    'Double-free — calling free on the same pointer twice (crashes or corrupts)',
                    'Buffer overflow — writing past the end of an allocated block',
                    'NULL dereference — forgetting to check if malloc returned NULL'
                ]},
            { type: 'note', content: 'Tools like Valgrind (Linux) and AddressSanitizer (-fsanitize=address) detect memory bugs at runtime. Use them during development — they catch errors that would otherwise silently corrupt data.' },
        ],
        exercises: [
            {
                id: 'ex-c09-1',
                title: 'Dynamic Array Input',
                instructions: 'Ask the user for the number of elements, allocate an array, read integers from the user, and print them in reverse order. Free the memory when done.',
                initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    // allocate array\n    // read values\n    // print reversed\n    // free\n    return 0;\n}',
                solution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    if (!arr) return 1;\n    for (int i = 0; i < n; i++) {\n        printf("Enter number %d: ", i + 1);\n        scanf("%d", &arr[i]);\n    }\n    printf("Reversed: ");\n    for (int i = n - 1; i >= 0; i--)\n        printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
                hints: ['Use malloc with n * sizeof(int).', 'Loop from n-1 down to 0 for the reverse print.', 'Remember to free!']
            }
        ]
    },
    {
        id: 'c-10',
        title: 'Structures and Unions',
        description: 'Group related data together into custom types.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is a Structure?' },
            { type: 'text', content: 'A struct lets you bundle multiple variables of different types under one name. Where an array holds many values of the same type, a struct holds a fixed collection of named fields of potentially different types.' },
            { type: 'text', content: 'Structs are the foundation of complex data modeling in C — they are the equivalent of classes without methods.' },
            { type: 'heading', content: 'Defining and Using a Struct' },
            { type: 'code', content: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[50];\n    int  age;\n    float gpa;\n    int  enrolled;  // acts as boolean\n};\n\nint main() {\n    struct Student s1;\n    strcpy(s1.name, "Alice");\n    s1.age      = 20;\n    s1.gpa      = 3.8;\n    s1.enrolled = 1;\n\n    // Designated initializer (C99+):\n    struct Student s2 = { .name = "Bob", .age = 22, .gpa = 3.2, .enrolled = 1 };\n\n    printf("%s (age %d): GPA %.1f\\n", s1.name, s1.age, s1.gpa);\n    printf("%s (age %d): GPA %.1f\\n", s2.name, s2.age, s2.gpa);\n    return 0;\n}' },
            { type: 'heading', content: 'typedef for Cleaner Syntax' },
            { type: 'text', content: 'typedef creates an alias so you can write Point instead of struct Point everywhere.' },
            { type: 'code', content: 'typedef struct {\n    float x;\n    float y;\n} Point;\n\ntypedef struct {\n    Point center;\n    float radius;\n} Circle;\n\nCircle c = { .center = {0.0f, 0.0f}, .radius = 5.0f };\nprintf("Circle at (%.1f, %.1f) r=%.1f\\n", c.center.x, c.center.y, c.radius);' },
            { type: 'heading', content: 'Structs and Pointers (Arrow Operator)' },
            { type: 'text', content: 'When you have a pointer to a struct, use the -> operator to access members. It is shorthand for (*ptr).member.' },
            { type: 'code', content: 'typedef struct { int x, y; } Point;\n\nvoid move(Point *p, int dx, int dy) {\n    p->x += dx;  // same as (*p).x += dx\n    p->y += dy;\n}\n\nint main() {\n    Point pt = {3, 4};\n    move(&pt, 2, -1);\n    printf("(%d, %d)\\n", pt.x, pt.y);  // (5, 3)\n    return 0;\n}' },
            { type: 'heading', content: 'Arrays of Structs' },
            { type: 'code', content: 'typedef struct { char name[30]; int score; } Player;\n\nPlayer leaderboard[3] = {\n    {"Alice", 980},\n    {"Bob",   870},\n    {"Carol", 920}\n};\n\nfor (int i = 0; i < 3; i++)\n    printf("#%d: %s — %d pts\\n", i+1, leaderboard[i].name, leaderboard[i].score);' },
            { type: 'heading', content: 'Unions — Shared Memory' },
            { type: 'text', content: 'A union is like a struct but all members share the same memory location. Its total size equals the size of its largest member. Only one member can hold a valid value at a time.' },
            { type: 'code', content: 'union Data {\n    int   i;      // 4 bytes\n    float f;      // 4 bytes — same 4 bytes as i!\n    char  str[8]; // 8 bytes — union size = 8\n};\n\nunion Data d;\nd.i = 42;\nprintf("As int:   %d\\n", d.i);\nd.f = 3.14f;  // overwrites the same memory\nprintf("As float: %.2f\\n", d.f);' },
            { type: 'note', content: 'Struct padding: the compiler may insert invisible padding bytes between struct fields to align data in memory. Use sizeof(struct Foo) rather than adding member sizes manually.' },
        ],
        exercises: [
            {
                id: 'ex-c10-1',
                title: 'Rectangle Structure',
                instructions: 'Define a typedef struct Rectangle with width and height (float). Write a function area() that computes the area. Create a rectangle and print its area.',
                initialCode: '#include <stdio.h>\n\n// Define Rectangle struct\n\n// area function\n\nint main() {\n    // Test\n    return 0;\n}',
                solution: '#include <stdio.h>\n\ntypedef struct {\n    float width;\n    float height;\n} Rectangle;\n\nfloat area(Rectangle r) {\n    return r.width * r.height;\n}\n\nint main() {\n    Rectangle rect = {5.5f, 2.0f};\n    printf("Area = %.2f\\n", area(rect));\n    return 0;\n}',
                hints: ['Access members with dot operator.', 'Pass the struct by value to the function.']
            }
        ]
    },
    {
        id: 'c-11',
        title: 'File I/O',
        description: 'Read from and write to files on disk.',
        completed: false,
        content: [
            { type: 'heading', content: 'Why File I/O?' },
            { type: 'text', content: 'Programs that only use stdin/stdout lose all their data when they exit. File I/O lets programs persist data between runs — configuration files, logs, databases, and save files all rely on this.' },
            { type: 'heading', content: 'Opening Files with fopen' },
            { type: 'text', content: 'fopen returns a FILE pointer on success or NULL on failure. Always check for NULL before proceeding.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    // Modes: "r"=read, "w"=write(truncate), "a"=append,\n    //        "r+"=read+write, "wb"=write binary, "rb"=read binary\n    FILE *fp = fopen("log.txt", "w");\n    if (fp == NULL) {\n        perror("fopen failed");  // prints system error message\n        return 1;\n    }\n\n    fprintf(fp, "Hello from C!\\n");\n    fprintf(fp, "Number: %d\\n", 42);\n    fclose(fp);  // ALWAYS close when done\n    return 0;\n}' },
            { type: 'heading', content: 'Reading Text Files' },
            { type: 'code', content: 'char line[256];\nFILE *fp = fopen("log.txt", "r");\nif (!fp) { perror("fopen"); return 1; }\n\n// fgets reads one line at a time (safe — respects buffer size)\nwhile (fgets(line, sizeof(line), fp) != NULL) {\n    printf("%s", line);  // line includes the newline\n}\n\nfclose(fp);' },
            { type: 'heading', content: 'Reading Structured Data with fscanf' },
            { type: 'code', content: '// Given a file with lines: "Alice 95"\n//                           "Bob 88"\ntypedef struct { char name[50]; int score; } Record;\n\nFILE *fp = fopen("scores.txt", "r");\nRecord r;\nwhile (fscanf(fp, "%49s %d", r.name, &r.score) == 2) {\n    printf("%s scored %d\\n", r.name, r.score);\n}\nfclose(fp);' },
            { type: 'heading', content: 'Binary File I/O' },
            { type: 'text', content: 'Binary mode stores raw bytes instead of text. This is more compact and efficient for structured data, but the files are not human-readable.' },
            { type: 'code', content: '// Write binary\nint data[5] = {1, 2, 3, 4, 5};\nFILE *fp = fopen("data.bin", "wb");\nfwrite(data, sizeof(int), 5, fp);  // write 5 ints\nfclose(fp);\n\n// Read binary back\nint restored[5];\nfp = fopen("data.bin", "rb");\nfread(restored, sizeof(int), 5, fp);\nfclose(fp);\n\nfor (int i = 0; i < 5; i++)\n    printf("%d ", restored[i]);' },
            { type: 'heading', content: 'File Position and Error Handling' },
            { type: 'code', content: 'FILE *fp = fopen("file.txt", "r");\n\nfseek(fp, 0, SEEK_END);       // move to end\nlong size = ftell(fp);         // get position = file size\nfseek(fp, 0, SEEK_SET);       // rewind to start\n\nif (ferror(fp)) printf("Error reading file\\n");\nif (feof(fp))   printf("Reached end of file\\n");\n\nrewind(fp);  // same as fseek(fp, 0, SEEK_SET)' },
            { type: 'note', content: 'On Windows, text mode (\\"r\\") translates \\r\\n to \\n automatically. If you need byte-exact file access (e.g. reading executables or images), always use binary mode (\\"rb\\"/\\"wb\\").' },
        ],
        exercises: [
            {
                id: 'ex-c11-1',
                title: 'Write and Read Back',
                instructions: 'Write a program that asks the user for 3 integers, writes them to "numbers.txt" (one per line), then reads the file back and prints the sum.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Write integers to file\n    // Read back and sum\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int nums[3];\n    FILE *fp = fopen("numbers.txt", "w");\n    if (!fp) return 1;\n    for (int i = 0; i < 3; i++) {\n        printf("Enter number %d: ", i + 1);\n        scanf("%d", &nums[i]);\n        fprintf(fp, "%d\\n", nums[i]);\n    }\n    fclose(fp);\n\n    fp = fopen("numbers.txt", "r");\n    int sum = 0, val;\n    while (fscanf(fp, "%d", &val) == 1)\n        sum += val;\n    fclose(fp);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
                hints: ['Open with "w" for writing, then "r" for reading.', 'Use fprintf for writing and fscanf for reading numbers.']
            }
        ]
    },
    {
        id: 'c-12',
        title: 'Preprocessor Directives',
        description: 'Master #include, #define, macros, and conditional compilation.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is the Preprocessor?' },
            { type: 'text', content: 'Before the compiler sees your code, the C preprocessor runs through it and performs text transformations. Lines starting with # are preprocessor directives — they are not C statements and do not end with semicolons.' },
            { type: 'text', content: 'The preprocessor handles three main jobs: file inclusion (#include), constant and macro definition (#define), and conditional compilation (#if, #ifdef).' },
            { type: 'heading', content: '#include — File Inclusion' },
            { type: 'code', content: '// Angle brackets <> search system include paths:\n#include <stdio.h>    // standard I/O\n#include <stdlib.h>   // malloc, free, exit\n#include <string.h>   // strcpy, strlen, memcpy\n#include <math.h>     // sin, cos, sqrt, pow\n#include <time.h>     // time, clock\n\n// Quotes "" search relative to your source file first:\n#include "myheader.h"  // your own header file' },
            { type: 'heading', content: '#define — Constants and Macros' },
            { type: 'code', content: '#include <stdio.h>\n\n// Named constant — preferred over magic numbers\n#define PI          3.14159265358979\n#define MAX_SIZE    256\n#define VERSION     "2.0.4"\n\n// Macro with arguments — behaves like inline function\n#define SQUARE(x)   ((x) * (x))\n#define MAX(a, b)   ((a) > (b) ? (a) : (b))\n#define ABS(x)      ((x) < 0 ? -(x) : (x))\n\nint main() {\n    printf("PI = %.5f\\n", PI);\n    printf("Square of 7: %d\\n",   SQUARE(7));\n    printf("Max(3, 9): %d\\n",     MAX(3, 9));\n    printf("ABS(-42): %d\\n",      ABS(-42));\n    return 0;\n}' },
            { type: 'text', content: 'Always wrap macro parameters in parentheses to avoid precedence bugs. Without them, SQUARE(1+2) expands to (1+2 * 1+2) = 5 instead of (1+2)*(1+2) = 9.' },
            { type: 'heading', content: 'Conditional Compilation' },
            { type: 'text', content: 'Conditional directives allow you to include or exclude blocks of code at compile time — useful for debug builds, platform-specific code, and feature flags.' },
            { type: 'code', content: '#define DEBUG 1\n#define PLATFORM_LINUX\n\n// Check a value:\n#if DEBUG\n    #define LOG(msg) printf("[DEBUG] %s\\n", msg)\n#else\n    #define LOG(msg)  // expands to nothing in release\n#endif\n\n// Check if a macro is defined at all:\n#ifdef PLATFORM_LINUX\n    #include <unistd.h>\n#elif defined(PLATFORM_WINDOWS)\n    #include <windows.h>\n#endif\n\nint main() {\n    LOG("Program started");\n    return 0;\n}' },
            { type: 'heading', content: 'Include Guards' },
            { type: 'text', content: 'If a header is included multiple times (transitively through other headers), its contents would be pasted multiple times, causing redefinition errors. Include guards prevent this.' },
            { type: 'code', content: '// mymath.h\n#ifndef MYMATH_H   // if not yet defined...\n#define MYMATH_H   // ...define it now (guard active)\n\nfloat circle_area(float r);\nfloat cylinder_volume(float r, float h);\n\n#endif  // MYMATH_H\n\n// Modern alternative — #pragma once (not standard but widely supported):\n#pragma once\nfloat circle_area(float r);' },
            { type: 'note', content: 'Macros have no type safety and no scope. Prefer const variables for constants and inline functions for macro-like utilities in C99 and later. Macros are still essential for conditional compilation and include guards.' },
        ],
        exercises: [
            {
                id: 'ex-c12-1',
                title: 'Area Macro',
                instructions: 'Define a macro AREA(radius) that computes the area of a circle (PI * r²). Use it to print the area for radius = 5.0.',
                initialCode: '#include <stdio.h>\n#define PI 3.14159\n// define AREA macro\n\nint main() {\n    printf("%.2f\\n", AREA(5.0));\n    return 0;\n}',
                solution: '#include <stdio.h>\n#define PI 3.14159\n#define AREA(r) (PI * (r) * (r))\n\nint main() {\n    printf("%.2f\\n", AREA(5.0));\n    return 0;\n}',
                hints: ['Wrap r in parentheses inside the macro to prevent precedence bugs.']
            }
        ]
    },
    {
        id: 'c-13',
        title: 'Function Pointers',
        description: 'Use pointers to functions for callbacks and flexible code.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is a Function Pointer?' },
            { type: 'text', content: 'Functions, like variables, live at memory addresses. A function pointer stores the address of a function, allowing you to choose which function to call at runtime. This is the foundation of callbacks, dispatch tables, and polymorphism in C.' },
            { type: 'heading', content: 'Declaring and Using Function Pointers' },
            { type: 'code', content: '#include <stdio.h>\n\nint add(int a, int b)      { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\n\n// Syntax: return_type (*pointer_name)(param_types)\nint (*operation)(int, int);\n\nint main() {\n    operation = add;\n    printf("add:      %d\\n", operation(10, 3));  // 13\n\n    operation = subtract;\n    printf("subtract: %d\\n", operation(10, 3));  // 7\n\n    operation = multiply;\n    printf("multiply: %d\\n", operation(10, 3));  // 30\n\n    // Array of function pointers — dispatch table\n    int (*ops[3])(int, int) = {add, subtract, multiply};\n    for (int i = 0; i < 3; i++)\n        printf("ops[%d](6,2) = %d\\n", i, ops[i](6, 2));\n    return 0;\n}' },
            { type: 'heading', content: 'Callbacks — Passing Functions as Arguments' },
            { type: 'text', content: 'The most common use of function pointers is as callbacks — you pass a function to another function so it can call your code at the right moment. The standard library\'s qsort uses exactly this pattern.' },
            { type: 'code', content: '#include <stdio.h>\n#include <stdlib.h>\n\n// Callback for qsort — must match signature int (*)(const void*, const void*)\nint compare_int(const void *a, const void *b) {\n    return (*(int*)a) - (*(int*)b);\n}\n\nvoid for_each(int *arr, int n, void (*fn)(int)) {\n    for (int i = 0; i < n; i++) fn(arr[i]);\n}\n\nvoid print_double(int x) { printf("%d ", x * 2); }\n\nint main() {\n    int nums[] = {5, 2, 8, 1, 9, 3};\n    qsort(nums, 6, sizeof(int), compare_int);\n\n    printf("Sorted: ");\n    for_each(nums, 6, printf_double);  // wrong name, see below\n    for (int i = 0; i < 6; i++) printf("%d ", nums[i]);\n    return 0;\n}' },
            { type: 'heading', content: 'typedef for Readable Function Pointer Types' },
            { type: 'code', content: '// Without typedef — hard to read:\nvoid (*handler)(int, const char*);\n\n// With typedef — much cleaner:\ntypedef void (*EventHandler)(int, const char*);\n\nvoid on_click(int id, const char *label) {\n    printf("Clicked button %d: %s\\n", id, label);\n}\n\nEventHandler h = on_click;\nh(1, "Submit");' },
            { type: 'note', content: 'Function pointers are the C way to achieve what other languages call interfaces, virtual methods, or first-class functions. The Linux kernel uses them extensively for driver interfaces and system call tables.' },
        ],
        exercises: [
            {
                id: 'ex-c13-1',
                title: 'Generic Map Function',
                instructions: 'Write a function `map` that applies a function pointer to every element of an array, returning a new dynamically allocated array.',
                initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint* map(int *arr, int size, int (*f)(int)) {\n    // allocate result, apply f\n}\n\nint square(int x) { return x * x; }\nint negate(int x) { return -x; }\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int *sq = map(arr, 4, square);\n    for (int i = 0; i < 4; i++) printf("%d ", sq[i]);\n    free(sq);\n    return 0;\n}',
                solution: '#include <stdio.h>\n#include <stdlib.h>\n\nint* map(int *arr, int size, int (*f)(int)) {\n    int *res = (int*)malloc(size * sizeof(int));\n    if (!res) return NULL;\n    for (int i = 0; i < size; i++) res[i] = f(arr[i]);\n    return res;\n}\n\nint square(int x) { return x * x; }\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int *sq = map(arr, 4, square);\n    for (int i = 0; i < 4; i++) printf("%d ", sq[i]);  // 1 4 9 16\n    free(sq);\n    return 0;\n}',
                hints: ['Allocate with malloc.', 'Call f(arr[i]) and store in the result array.']
            }
        ]
    },
    {
        id: 'c-14',
        title: 'Bitwise Operations',
        description: 'Manipulate individual bits for low‑level control.',
        completed: false,
        content: [
            { type: 'heading', content: 'Why Bitwise Operations?' },
            { type: 'text', content: 'At the hardware level, everything is bits. Bitwise operations let you pack multiple flags into a single integer, implement fast arithmetic tricks, manipulate hardware registers, write cryptographic algorithms, and work with network protocols and file formats — all with maximum efficiency.' },
            { type: 'heading', content: 'The Six Bitwise Operators' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    unsigned char a = 0b00110011;  // 51  in decimal\n    unsigned char b = 0b11001100;  // 204 in decimal\n\n    printf("a       = %08b (%3d)\\n", a, a);\n    printf("b       = %08b (%3d)\\n", b, b);\n    printf("a & b   = %08b (%3d)\\n", a & b,  a & b);  // AND:  0\n    printf("a | b   = %08b (%3d)\\n", a | b,  a | b);  // OR:   255\n    printf("a ^ b   = %08b (%3d)\\n", a ^ b,  a ^ b);  // XOR:  255\n    printf("~a      = %08b (%3d)\\n", (unsigned char)~a, (unsigned char)~a); // NOT: 204\n    printf("a << 1  = %08b (%3d)\\n", a << 1, a << 1); // left shift:  102\n    printf("a >> 1  = %08b (%3d)\\n", a >> 1, a >> 1); // right shift: 25\n    return 0;\n}' },
            { type: 'heading', content: 'Bit Flags — Packing Booleans Efficiently' },
            { type: 'text', content: 'Instead of using 8 separate bool variables (8 bytes), you can pack 8 flags into a single unsigned char (1 byte).' },
            { type: 'code', content: '#define FLAG_READ    (1 << 0)  // 00000001\n#define FLAG_WRITE   (1 << 1)  // 00000010\n#define FLAG_EXEC    (1 << 2)  // 00000100\n#define FLAG_HIDDEN  (1 << 3)  // 00001000\n\nunsigned char perms = 0;\n\n// Set flags:\nperms |= FLAG_READ;\nperms |= FLAG_WRITE;\n\n// Test a flag:\nif (perms & FLAG_READ)  printf("Can read\\n");\nif (!(perms & FLAG_EXEC)) printf("Cannot execute\\n");\n\n// Clear a flag:\nperms &= ~FLAG_WRITE;\n\n// Toggle a flag:\nperms ^= FLAG_HIDDEN;\n\nprintf("perms = 0x%02X\\n", perms);' },
            { type: 'heading', content: 'Bit Manipulation Tricks' },
            { type: 'code', content: '// Check if n is a power of 2 (only one bit set)\nint is_power_of_two(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}\n\n// Swap two integers without a temp variable\nvoid xor_swap(int *a, int *b) {\n    *a ^= *b;\n    *b ^= *a;\n    *a ^= *b;\n}\n\n// Extract nibbles (half-bytes)\nunsigned char byte = 0xAB;\nunsigned char high = (byte >> 4) & 0x0F;  // 0xA = 10\nunsigned char low  =  byte       & 0x0F;  // 0xB = 11\nprintf("High nibble: %X, Low nibble: %X\\n", high, low);' },
            { type: 'heading', content: 'Bitwise vs Logical Operators' },
            { type: 'text', content: 'A common mistake is confusing & (bitwise AND) with && (logical AND). They behave very differently: & operates on every bit of both operands, while && only checks if each operand is zero or non-zero and short-circuits.' },
            { type: 'code', content: 'int a = 6;  // 0b110\nint b = 3;  // 0b011\n\nprintf("%d\\n", a & b);   // 2 (0b010) — bitwise\nprintf("%d\\n", a && b);  // 1 (both non-zero) — logical' },
            { type: 'note', content: 'Right-shifting a negative signed integer is implementation-defined in C. Always use unsigned types for bit manipulation to get predictable behavior. For example, use unsigned int or uint32_t from <stdint.h>.' },
        ],
        exercises: [
            {
                id: 'ex-c14-1',
                title: 'Check Even/Odd with Bitwise',
                instructions: 'Write a program that checks whether a number is even or odd using a bitwise operator — no modulo % allowed.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter an integer: ");\n    scanf("%d", &n);\n    // Use bitwise AND with 1\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter an integer: ");\n    scanf("%d", &n);\n    if (n & 1)\n        printf("%d is Odd\\n",  n);\n    else\n        printf("%d is Even\\n", n);\n    return 0;\n}',
                hints: ['The least significant bit of any integer is 1 if odd, 0 if even.', 'Use n & 1 to test that bit.']
            }
        ]
    }
];

export default cLessons;