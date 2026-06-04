
const cLessons = [
    {
        id: 'c-01',
        title: 'Introduction to C',
        description: 'Understand the power and philosophy behind the C language.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is C?' },
            { type: 'text', content: 'C is a general-purpose, compiled systems programming language created by Dennis Ritchie at Bell Labs in 1972. Nearly every operating system kernel, embedded firmware, and performance-critical system is written in C.' },
            { type: 'note', content: 'C gives you direct control over hardware and memory. With great power comes great responsibility — C will let you make mistakes that other languages prevent.' },
            { type: 'heading', content: 'Your First C Program' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}' },
            { type: 'heading', content: 'Compiling and Running' },
            { type: 'text', content: 'C is a compiled language. You must convert your source code to machine code before running it:' },
            { type: 'code', content: '# Compile with GCC:\ngcc main.c -o main\n\n# Run the output:\n./main' },
            { type: 'heading', content: 'Program Structure' },
            { type: 'list', items: ['#include imports standard library headers', 'int main() is the entry point of every C program', 'printf() prints formatted text to the terminal', 'return 0 signals the OS that the program exited successfully'] },
        ],
        exercises: [
            {
                id: 'ex-c01-1',
                title: 'Hello, Yourself',
                instructions: 'Write a C program that prints "Hello, C programmer!" to the screen.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C programmer!\\n");\n    return 0;\n}',
                hints: ['Use printf() with a string argument.', 'Don\'t forget the newline \\n.']
            }
        ]
    },
    {
        id: 'c-02',
        title: 'Variables & Data Types',
        description: 'Declare typed variables and understand memory sizes.',
        completed: false,
        content: [
            { type: 'heading', content: 'Declaring Variables' },
            { type: 'text', content: 'In C, every variable must be declared with an explicit type before use. The type determines how many bytes of memory are allocated.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 1.82;\n    char grade = \'A\';\n    double pi = 3.14159265358979;\n\n    printf("Age: %d\\n", age);\n    printf("Height: %.2f\\n", height);\n    printf("Grade: %c\\n", grade);\n    return 0;\n}' },
            { type: 'heading', content: 'Common Data Types' },
            { type: 'list', items: ['int — integer, typically 4 bytes', 'char — single character, 1 byte', 'float — 32-bit decimal', 'double — 64-bit decimal (more precision)', 'long — larger integer'] },
            { type: 'heading', content: 'Format Specifiers' },
            { type: 'code', content: '// printf format specifiers:\n// %d  -> int\n// %f  -> float\n// %lf -> double\n// %c  -> char\n// %s  -> string (char array)\n\nprintf("Int: %d, Float: %.2f\\n", 42, 3.14);' },
            { type: 'note', content: 'Use sizeof() to check the byte size of any type on your system: printf("%zu", sizeof(int));' },
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
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int a = 17, b = 5;\n    printf("%d + %d = %d\\n", a, b, a + b);\n    printf("%d - %d = %d\\n", a, b, a - b);\n    printf("%d * %d = %d\\n", a, b, a * b);\n    printf("%d / %d = %d\\n", a, b, a / b); // Integer division\n    printf("%d %% %d = %d\\n", a, b, a % b); // Modulo\n    return 0;\n}' },
            { type: 'heading', content: 'Increment & Decrement' },
            { type: 'code', content: 'int x = 5;\nx++;   // x is now 6 (post-increment)\n++x;   // x is now 7 (pre-increment)\nx--;   // x is now 6 (post-decrement)\n\nprintf("%d\\n", x); // 6' },
            { type: 'heading', content: 'Comparison & Logical' },
            { type: 'code', content: 'int a = 10, b = 20;\n\n// Comparison\nprintf("%d\\n", a < b);   // 1 (true)\nprintf("%d\\n", a == b);  // 0 (false)\n\n// Logical\nprintf("%d\\n", a < b && b < 30);  // AND\nprintf("%d\\n", a > 100 || b < 30); // OR\nprintf("%d\\n", !(a == b));         // NOT' },
        ],
        exercises: [
            {
                id: 'ex-c03-1',
                title: 'Temperature Converter',
                instructions: 'Write a program that converts Celsius to Fahrenheit using the formula: F = C * 9/5 + 32. Use integer arithmetic first, then modify to use float.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int celsius = 25;\n    // Calculate fahrenheit\n    printf("%d°C = %d°F\\n", celsius, fahrenheit);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    float fahrenheit = celsius * 9.0/5.0 + 32.0;\n    printf("%.1f°C = %.1f°F\\n", celsius, fahrenheit);\n    return 0;\n}',
                hints: ['Integer division truncates – use float or double.', '9/5 with integers yields 1.']
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
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n\n    if (score >= 90) {\n        printf("Grade: A\\n");\n    } else if (score >= 80) {\n        printf("Grade: B\\n");\n    } else if (score >= 70) {\n        printf("Grade: C\\n");\n    } else {\n        printf("Grade: F\\n");\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'For Loop' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        printf("Step %d\\n", i);\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'While Loop' },
            { type: 'code', content: 'int count = 0;\nwhile (count < 5) {\n    printf("Count: %d\\n", count);\n    count++;\n}' },
            { type: 'heading', content: 'Switch Statement' },
            { type: 'code', content: 'char grade = \'B\';\n\nswitch (grade) {\n    case \'A\': printf("Excellent!\\n"); break;\n    case \'B\': printf("Good job!\\n"); break;\n    case \'C\': printf("Pass.\\n"); break;\n    default:  printf("Try harder.\\n");\n}' },
        ],
        exercises: [
            {
                id: 'ex-c04-1',
                title: 'Sum of Numbers',
                instructions: 'Use a for loop to compute the sum of numbers from 1 to 100. Print the result.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    // Your loop here\n    printf("Sum 1..100 = %d\\n", sum);\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("Sum 1..100 = %d\\n", sum);\n    return 0;\n}',
                hints: ['Initialize sum to 0.', 'Add each i to sum.']
            }
        ]
    },
    {
        id: 'c-05',
        title: 'Functions',
        description: 'Structure your code into reusable, callable blocks.',
        completed: false,
        content: [
            { type: 'heading', content: 'Defining a Function' },
            { type: 'code', content: '#include <stdio.h>\n\n// Function declaration (prototype)\nint add(int a, int b);\n\nint main() {\n    int result = add(10, 25);\n    printf("Result: %d\\n", result);\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}' },
            { type: 'heading', content: 'Void Functions' },
            { type: 'code', content: 'void greet(char name[]) {\n    printf("Hello, %s!\\n", name);\n}\n\n// Calling it:\ngreet("Alex");' },
            { type: 'heading', content: 'Recursive Functions' },
            { type: 'code', content: 'int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nprintf("%d\\n", factorial(5)); // 120' },
            { type: 'note', content: 'In C, function prototypes (declarations) must appear before they are called. This tells the compiler the function signature before the full definition.' },
        ],
        exercises: [
            {
                id: 'ex-c05-1',
                title: 'Max of Two',
                instructions: 'Write a function `int max(int a, int b)` that returns the larger number. Call it from main with test values.',
                initialCode: '#include <stdio.h>\n\n// Function prototype\n\nint main() {\n    printf("%d\\n", max(10, 20));\n    printf("%d\\n", max(99, 42));\n    return 0;\n}\n\n// Function definition',
                solution: '#include <stdio.h>\n\nint max(int a, int b);\n\nint main() {\n    printf("%d\\n", max(10, 20));\n    printf("%d\\n", max(99, 42));\n    return 0;\n}\n\nint max(int a, int b) {\n    if (a > b) return a;\n    else return b;\n}',
                hints: ['Use an if statement inside the function.']
            }
        ]
    },
    {
        id: 'c-06',
        title: 'Arrays & Strings',
        description: 'Store collections of data and work with text.',
        completed: false,
        content: [
            { type: 'heading', content: 'Declaring Arrays' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    numbers[2] = 99;  // change third element\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", numbers[i]);\n    }\n    return 0;\n}' },
            { type: 'heading', content: 'Strings as Character Arrays' },
            { type: 'code', content: `char greeting[6] = {'H','e','l','l','o','\\0'};
char name[] = "Alice";  // automatically adds \\0
printf("%s %s\\n", greeting, name);` },
            { type: 'heading', content: 'Common String Functions' },
            { type: 'code', content: '#include <string.h>\n\nchar src[20] = "World";\nchar dest[20];\nstrcpy(dest, src);            // copy\nstrcat(dest, "!");            // concatenate\nint len = strlen(dest);       // length (without \\0)' },
            { type: 'note', content: 'Strings must be null-terminated (\\0). Always ensure buffers are large enough to avoid overflow.' }
        ],
        exercises: [
            {
                id: 'ex-c06-1',
                title: 'Reverse an Array',
                instructions: 'Write a program that reverses an integer array in place. Print the array before and after.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    // Reverse logic here\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    for (int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
                hints: ['Swap symmetric elements using a temporary variable.']
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
            { type: 'text', content: 'A pointer stores the memory address of another variable. You can access or modify that variable indirectly.' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int value = 42;\n    int *ptr = &value;   // ptr holds address of value\n    printf("value = %d\\n", value);\n    printf("address = %p\\n", (void*)ptr);\n    printf("dereferenced = %d\\n", *ptr);  // 42\n    *ptr = 100;          // changes value indirectly\n    printf("new value = %d\\n", value);    // 100\n    return 0;\n}' },
            { type: 'heading', content: 'Pointer to Different Types' },
            { type: 'code', content: 'double pi = 3.14;\ndouble *pPi = &pi;\nchar ch = \'Z\';\nchar *pCh = &ch;' },
            { type: 'note', content: 'Always initialize pointers before using them. Uninitialized pointers point to random memory and can crash your program.' }
        ],
        exercises: [
            {
                id: 'ex-c07-1',
                title: 'Swap Using Pointers',
                instructions: 'Write a function `void swap(int *a, int *b)` that swaps two integers using pointers. Test it in main.',
                initialCode: '#include <stdio.h>\n\nvoid swap(int *a, int *b);\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("x=%d, y=%d\\n", x, y);\n    return 0;\n}\n\n// Define swap here',
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
            { type: 'heading', content: 'Array Name as Pointer' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    int arr[3] = {10, 20, 30};\n    int *ptr = arr;   // same as &arr[0]\n    printf("%d\\n", *ptr);      // 10\n    ptr++;\n    printf("%d\\n", *ptr);      // 20\n    printf("%d\\n", *(ptr+1));  // 30\n    return 0;\n}' },
            { type: 'heading', content: 'Difference Between arr and &arr' },
            { type: 'code', content: 'int arr[5];\n// arr points to first element\n// &arr points to whole array (same address, different type)\nprintf("%p %p\\n", arr, &arr);  // same address\nprintf("%ld\\n", &arr[1] - arr); // 1 (element difference)' },
            { type: 'heading', content: 'Iterating with Pointers' },
            { type: 'code', content: 'for (int *p = arr; p < arr + 5; p++) {\n    printf("%d ", *p);\n}' }
        ],
        exercises: [
            {
                id: 'ex-c08-1',
                title: 'Sum via Pointer',
                instructions: 'Write a function that returns the sum of an integer array using pointer arithmetic (no indexing []).',
                initialCode: '#include <stdio.h>\n\nint sum_array(int *arr, int size) {\n    // Use pointer arithmetic\n}\n\nint main() {\n    int nums[] = {4, 7, 1, 9};\n    printf("Sum = %d\\n", sum_array(nums, 4));\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint sum_array(int *arr, int size) {\n    int total = 0;\n    for (int *p = arr; p < arr + size; p++) {\n        total += *p;\n    }\n    return total;\n}\n\nint main() {\n    int nums[] = {4, 7, 1, 9};\n    printf("Sum = %d\\n", sum_array(nums, 4));\n    return 0;\n}',
                hints: ['Use a pointer that walks from arr to arr+size.']
            }
        ]
    },
    {
        id: 'c-09',
        title: 'Dynamic Memory Allocation',
        description: 'Allocate memory at runtime using malloc, calloc, and free.',
        completed: false,
        content: [
            { type: 'heading', content: 'malloc and free' },
            { type: 'code', content: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    if (arr == NULL) {\n        printf("Memory allocation failed\\n");\n        return 1;\n    }\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n    free(arr);  // always free when done\n    return 0;\n}' },
            { type: 'heading', content: 'calloc vs malloc' },
            { type: 'code', content: '// calloc initializes to zero\nint *p = (int*)calloc(10, sizeof(int));\n// malloc does not initialize\nint *q = (int*)malloc(10 * sizeof(int));' },
            { type: 'heading', content: 'realloc' },
            { type: 'code', content: 'int *data = (int*)malloc(3 * sizeof(int));\ndata = (int*)realloc(data, 6 * sizeof(int));  // resize' },
            { type: 'note', content: 'Always check the return value of malloc/calloc/realloc. Dereferencing NULL leads to a crash.' }
        ],
        exercises: [
            {
                id: 'ex-c09-1',
                title: 'Dynamic Array Input',
                instructions: 'Ask the user for the number of elements, allocate an array of that size, read integers from the user, and print them in reverse order.',
                initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    // allocate array\n    // read values\n    // print reversed\n    // free\n    return 0;\n}',
                solution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf("Enter number of elements: ");\n    scanf("%d", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    if (!arr) return 1;\n    for (int i = 0; i < n; i++) {\n        printf("Enter number %d: ", i+1);\n        scanf("%d", &arr[i]);\n    }\n    for (int i = n-1; i >= 0; i--) {\n        printf("%d ", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
                hints: ['Use malloc with n * sizeof(int).', 'Remember to free the memory.']
            }
        ]
    },
    {
        id: 'c-10',
        title: 'Structures and Unions',
        description: 'Group related data together into custom types.',
        completed: false,
        content: [
            { type: 'heading', content: 'Defining a Structure' },
            { type: 'code', content: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[50];\n    int age;\n    float gpa;\n};\n\nint main() {\n    struct Student s1;\n    strcpy(s1.name, "Alice");\n    s1.age = 20;\n    s1.gpa = 3.8;\n    printf("%s, age %d, GPA %.2f\\n", s1.name, s1.age, s1.gpa);\n    return 0;\n}' },
            { type: 'heading', content: 'typedef for Convenience' },
            { type: 'code', content: 'typedef struct {\n    int x, y;\n} Point;\n\nPoint p1 = {10, 20};' },
            { type: 'heading', content: 'Unions (share memory)' },
            { type: 'code', content: 'union Data {\n    int i;\n    float f;\n    char str[20];\n};\n\nunion Data d;\nd.i = 42;   // now holds an int\n// d.f would overwrite' },
            { type: 'note', content: 'Unions use the same memory for all members; only one member can hold a value at a time.' }
        ],
        exercises: [
            {
                id: 'ex-c10-1',
                title: 'Rectangle Structure',
                instructions: 'Define a struct Rectangle with width and height (float). Write a function that computes the area. Create a rectangle and print its area.',
                initialCode: '#include <stdio.h>\n\n// Define Rectangle struct\n\n// area function\n\nint main() {\n    // Test\n    return 0;\n}',
                solution: '#include <stdio.h>\n\ntypedef struct {\n    float width;\n    float height;\n} Rectangle;\n\nfloat area(Rectangle r) {\n    return r.width * r.height;\n}\n\nint main() {\n    Rectangle rect = {5.5, 2.0};\n    printf("Area = %.2f\\n", area(rect));\n    return 0;\n}',
                hints: ['Access members with dot operator.']
            }
        ]
    },
    {
        id: 'c-11',
        title: 'File I/O',
        description: 'Read from and write to files on disk.',
        completed: false,
        content: [
            { type: 'heading', content: 'Opening and Closing Files' },
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("test.txt", "w");\n    if (fp == NULL) {\n        perror("Error opening file");\n        return 1;\n    }\n    fprintf(fp, "Hello file!\\n");\n    fclose(fp);\n    return 0;\n}' },
            { type: 'heading', content: 'Reading from a File' },
            { type: 'code', content: 'char buffer[100];\nFILE *fp = fopen("test.txt", "r");\nwhile (fgets(buffer, sizeof(buffer), fp) != NULL) {\n    printf("%s", buffer);\n}\nfclose(fp);' },
            { type: 'heading', content: 'Binary I/O' },
            { type: 'code', content: 'int data[5] = {1,2,3,4,5};\nFILE *fp = fopen("data.bin", "wb");\nfwrite(data, sizeof(int), 5, fp);\nfclose(fp);' }
        ],
        exercises: [
            {
                id: 'ex-c11-1',
                title: 'Write and Read Back',
                instructions: 'Write a program that asks the user for 3 integers, writes them to a file "numbers.txt" (one per line), then reads the file back and prints the sum.',
                initialCode: '#include <stdio.h>\n\nint main() {\n    // Write integers\n    // Read and sum\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int nums[3];\n    FILE *fp = fopen("numbers.txt", "w");\n    for (int i = 0; i < 3; i++) {\n        printf("Enter number %d: ", i+1);\n        scanf("%d", &nums[i]);\n        fprintf(fp, "%d\\n", nums[i]);\n    }\n    fclose(fp);\n\n    fp = fopen("numbers.txt", "r");\n    int sum = 0, val;\n    while (fscanf(fp, "%d", &val) == 1) {\n        sum += val;\n    }\n    fclose(fp);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
                hints: ['Open with "w" for writing, then "r" for reading.', 'Use fprintf and fscanf.']
            }
        ]
    },
    {
        id: 'c-12',
        title: 'Preprocessor Directives',
        description: 'Master #include, #define, macros, and conditional compilation.',
        completed: false,
        content: [
            { type: 'heading', content: 'Macros (#define)' },
            { type: 'code', content: '#include <stdio.h>\n#define PI 3.14159\n#define SQUARE(x) ((x)*(x))\n\nint main() {\n    printf("%f\\n", PI);\n    printf("%d\\n", SQUARE(5));   // 25\n    return 0;\n}' },
            { type: 'heading', content: 'Conditional Compilation' },
            { type: 'code', content: '#define DEBUG 1\n\n#if DEBUG\n    printf("Debug mode on\\n");\n#else\n    printf("Release mode\\n");\n#endif' },
            { type: 'heading', content: 'Include Guards' },
            { type: 'code', content: '#ifndef MYHEADER_H\n#define MYHEADER_H\n// header content\n#endif' }
        ],
        exercises: [
            {
                id: 'ex-c12-1',
                title: 'Area Macro',
                instructions: 'Define a macro AREA(radius) that computes the area of a circle (π * r²). Use it to print the area for radius = 5.0.',
                initialCode: '#include <stdio.h>\n#define PI 3.14159\n// define AREA macro\n\nint main() {\n    printf("%.2f\\n", AREA(5.0));\n    return 0;\n}',
                solution: '#include <stdio.h>\n#define PI 3.14159\n#define AREA(r) (PI * (r) * (r))\n\nint main() {\n    printf("%.2f\\n", AREA(5.0));\n    return 0;\n}',
                hints: ['Wrap r in parentheses to avoid precedence issues.']
            }
        ]
    },
    {
        id: 'c-13',
        title: 'Function Pointers',
        description: 'Use pointers to functions for callbacks and flexible code.',
        completed: false,
        content: [
            { type: 'heading', content: 'Declaring and Using Function Pointers' },
            { type: 'code', content: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\n\nint main() {\n    int (*operation)(int, int);  // function pointer\n    operation = add;\n    printf("%d\\n", operation(5, 3));  // 8\n    operation = multiply;\n    printf("%d\\n", operation(5, 3));  // 15\n    return 0;\n}' },
            { type: 'heading', content: 'Callback Example' },
            { type: 'code', content: 'void for_each(int *arr, int size, void (*func)(int)) {\n    for (int i = 0; i < size; i++) func(arr[i]);\n}\n\nvoid print_int(int x) { printf("%d ", x); }\n\nint main() {\n    int nums[] = {1,2,3};\n    for_each(nums, 3, print_int);\n    return 0;\n}' }
        ],
        exercises: [
            {
                id: 'ex-c13-1',
                title: 'Generic Map Function',
                instructions: 'Write a function `map` that takes an integer array, its size, and a function pointer `int (*f)(int)`, and returns a new dynamically allocated array where each element is f(original).',
                initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint* map(int *arr, int size, int (*f)(int)) {\n    // allocate result array\n    // apply f to each element\n}\n\nint square(int x) { return x * x; }\n\nint main() {\n    int arr[] = {1,2,3,4};\n    int *result = map(arr, 4, square);\n    for (int i=0;i<4;i++) printf("%d ", result[i]);\n    free(result);\n    return 0;\n}',
                solution: '#include <stdio.h>\n#include <stdlib.h>\n\nint* map(int *arr, int size, int (*f)(int)) {\n    int *res = (int*)malloc(size * sizeof(int));\n    if (!res) return NULL;\n    for (int i = 0; i < size; i++) res[i] = f(arr[i]);\n    return res;\n}\n\nint square(int x) { return x * x; }\n\nint main() {\n    int arr[] = {1,2,3,4};\n    int *result = map(arr, 4, square);\n    for (int i=0;i<4;i++) printf("%d ", result[i]);\n    free(result);\n    return 0;\n}',
                hints: ['Allocate memory using malloc.', 'Call f on each element.']
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
            { type: 'code', content: '#include <stdio.h>\n\nint main() {\n    unsigned char a = 0b00110011;  // 51\n    unsigned char b = 0b11001100;  // 204\n    printf("AND: %d\\n", a & b);    // 0\n    printf("OR:  %d\\n", a | b);    // 255\n    printf("XOR: %d\\n", a ^ b);    // 255\n    printf("NOT a: %d\\n", ~a);     // 204\n    printf("Left shift: %d\\n", a << 1); // 102\n    printf("Right shift: %d\\n", a >> 1); // 25\n    return 0;\n}' },
            { type: 'heading', content: 'Common Use Cases' },
            { type: 'list', items: ['Setting a bit: flags |= (1 << bit)', 'Clearing a bit: flags &= ~(1 << bit)', 'Toggling a bit: flags ^= (1 << bit)', 'Testing a bit: if (flags & (1 << bit))'] },
            { type: 'note', content: 'Bitwise operations are extremely fast and often used in embedded programming, graphics, and cryptography.' }
        ],
        exercises: [
            {
                id: 'ex-c14-1',
                title: 'Check Even/Odd with Bitwise',
                instructions: 'Write a program that checks whether a number is even or odd using a bitwise operator (no modulo %).',
                initialCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter an integer: ");\n    scanf("%d", &n);\n    // Use bitwise AND with 1\n    return 0;\n}',
                solution: '#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter an integer: ");\n    scanf("%d", &n);\n    if (n & 1) printf("Odd\\n");\n    else printf("Even\\n");\n    return 0;\n}',
                hints: ['If the least significant bit is 1, the number is odd.']
            }
        ]
    }
];

export default cLessons;

