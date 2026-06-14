const pythonLessons = [
    {
        id: 'py-01',
        title: 'Introduction to Python',
        description: 'Understand what Python is, why it matters, and write your first program.',
        completed: false,
        content: [
            { type: 'heading', content: 'What is Python?' },
            { type: 'text', content: 'Python is a high-level, interpreted programming language known for its clean and readable syntax. Created by Guido van Rossum in 1991, it has become one of the most popular languages in the world — from web development to machine learning.' },
            { type: 'note', content: 'Python uses indentation (whitespace) to define code blocks instead of curly braces. This forces clean, readable code.' },
            { type: 'heading', content: 'Your First Program' },
            { type: 'text', content: 'The tradition in programming is to write "Hello, World!" as your first program. In Python, it is a single line:' },
            { type: 'code', content: 'print("Hello, World!")' },
            { type: 'heading', content: 'Running Python' },
            { type: 'text', content: 'Python files have the .py extension. You can run them in a terminal with the python command:' },
            { type: 'code', content: '# In your terminal:\npython main.py\n\n# Or interactively:\npython3' },
            { type: 'heading', content: 'Comments' },
            { type: 'text', content: 'Comments begin with a # character. Python ignores everything after # on that line.' },
            { type: 'code', content: '# This is a comment\nprint("Visible code")  # Inline comment' },
        ],
        keyTakeaways: [
            'Python is interpreted, not compiled',
            'Indentation defines code blocks, not braces',
            'Use print() to display output',
            'Comments start with #',
            'Python files use .py extension'
        ],
        exercises: [
            {
                id: 'ex-py01-1',
                title: 'Personal Greeting',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Write a Python program that prints "Hello, [your name]!" using a variable.',
                initialCode: '# Your code here\nname = "Your name"\n# print your greeting',
                solution: 'name = "Alice"\nprint(f"Hello, {name}!")',
                hints: ['Use an f-string or concatenation'],
                example: 'print(f"Hello, {name}!")'
            },
            {
                id: 'ex-py01-2',
                title: 'Multi-line Output',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Print three lines of output using a single print statement with newline characters.',
                initialCode: '# Print three lines\nprint()',
                solution: 'print("Line 1\\nLine 2\\nLine 3")',
                hints: ['Use \\n for newlines'],
            },
            {
                id: 'ex-py01-3',
                title: 'Variable Printing',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Create variables for your name, age, and favorite color, then print them all in one sentence.',
                initialCode: '# Create variables\n# Print them',
                solution: 'name = "Alice"\nage = 25\ncolor = "blue"\nprint(f"My name is {name}, I am {age} years old, and my favorite color is {color}.")',
                hints: ['Use f-strings for easy formatting', 'Separate variables with commas in print'],
            }
        ]
    },
    {
        id: 'py-02',
        title: 'Variables & Data Types',
        description: 'Learn how to store and work with data in Python.',
        completed: false,
        content: [
            { type: 'heading', content: 'Variables' },
            { type: 'code', content: 'name = "Alex"\nage = 25\nheight = 1.82\nis_hacker = True\n\nprint(name, age)' },
            { type: 'heading', content: 'Basic Data Types' },
            { type: 'list', items: ['int — whole numbers: 42, -7, 0', 'float — decimal numbers: 3.14, -0.5', 'str — text: "hello", \'world\'', 'bool — True or False', 'None — absence of a value'] },
            { type: 'heading', content: 'Type Checking' },
            { type: 'code', content: 'x = 42\nprint(type(x))   # <class \'int\'>\n\ny = "cyber"\nprint(type(y))   # <class \'str\'>' },
            { type: 'heading', content: 'Type Conversion' },
            { type: 'code', content: 'num_str = "123"\nnum_int = int(num_str)\npi_str = str(3.14159)\nfloat_val = float("99.99")' },
            { type: 'note', content: 'Python is dynamically typed — a variable can change type during execution. This is powerful but requires attention.' },
        ],
        keyTakeaways: [
            'Python uses dynamic typing',
            'Common types: int, float, str, bool, None',
            'Use type() to check variable type',
            'Use int(), float(), str() for conversion',
            'Variables don\'t need explicit declaration'
        ],
        exercises: [
            {
                id: 'ex-py02-1',
                title: 'Type Explorer',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Create variables of different types and print each with its type.',
                initialCode: '# Create variables of each type\n# Print them with types',
                solution: 'age = 25\nprice = 19.99\nname = "Python"\nis_fun = True\n\nprint(age, type(age))\nprint(price, type(price))\nprint(name, type(name))\nprint(is_fun, type(is_fun))',
                hints: ['Use type(variable) inside print()'],
            },
            {
                id: 'ex-py02-2',
                title: 'Type Conversion Challenge',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Convert a string "3.14" to float, then to int, then back to string. Print each step.',
                initialCode: '# Convert and print each step',
                solution: 'num_str = "3.14"\nprint(f"String: {num_str}, type: {type(num_str)}")\nnum_float = float(num_str)\nprint(f"Float: {num_float}, type: {type(num_float)}")\nnum_int = int(num_float)\nprint(f"Int: {num_int}, type: {type(num_int)}")\nback_to_str = str(num_int)\nprint(f"Back to string: {back_to_str}, type: {type(back_to_str)}")',
                hints: ['Use float(), int(), str() functions', 'Converting float to int truncates'],
            },
            {
                id: 'ex-py02-3',
                title: 'Multiple Assignment',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Assign values to three variables in one line, then print them.',
                initialCode: '# Multiple assignment in one line',
                solution: 'a, b, c = 1, 2, 3\nprint(f"a={a}, b={b}, c={c}")',
                hints: ['Use a, b, c = values syntax'],
            }
        ]
    },
    {
        id: 'py-03',
        title: 'Input & Output',
        description: 'Interact with users via the terminal.',
        completed: false,
        content: [
            { type: 'heading', content: 'Printing Output' },
            { type: 'code', content: 'print("Hello!")\nprint("A", "B", "C")\nprint("Name:", "Alex")' },
            { type: 'heading', content: 'F-Strings (Formatted Output)' },
            { type: 'code', content: 'name = "Alex"\nscore = 98\nprint(f"Player {name} scored {score} points!")' },
            { type: 'heading', content: 'Reading User Input' },
            { type: 'code', content: 'name = input("Enter your name: ")\nprint(f"Welcome, {name}!")' },
            { type: 'note', content: 'input() always returns a string. Use int() or float() to convert it to a number before doing math.' },
        ],
        keyTakeaways: [
            'print() displays output to the console',
            'f-strings embed variables in strings with {}',
            'input() reads user input as a string',
            'Convert input with int() or float() for numbers',
            'sep and end parameters customize print behavior'
        ],
        exercises: [
            {
                id: 'ex-py03-1',
                title: 'Rectangle Area Calculator',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Ask user for length and width, calculate area.',
                initialCode: '# Get length and width\n# Calculate and print area',
                solution: 'length = float(input("Enter length: "))\nwidth = float(input("Enter width: "))\narea = length * width\nprint(f"The area is {area:.2f}")',
                hints: ['Use float() to convert input', 'Use f-string formatting for two decimals'],
            },
            {
                id: 'ex-py03-2',
                title: 'Personal Info Formatter',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Ask for name, age, and city, then print a formatted sentence.',
                initialCode: '# Get name, age, city\n# Print formatted sentence',
                solution: 'name = input("Enter your name: ")\nage = input("Enter your age: ")\ncity = input("Enter your city: ")\nprint(f"Hello {name}! You are {age} years old and live in {city}.")',
                hints: ['Store each input in a variable', 'Use f-string for formatting'],
            },
            {
                id: 'ex-py03-3',
                title: 'Simple Calculator',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Ask for two numbers, then print their sum, difference, product, and quotient.',
                initialCode: '# Get two numbers\n# Calculate and print results',
                solution: 'a = float(input("Enter first number: "))\nb = float(input("Enter second number: "))\nprint(f"Sum: {a + b}")\nprint(f"Difference: {a - b}")\nprint(f"Product: {a * b}")\nprint(f"Quotient: {a / b}")',
                hints: ['Convert input to float for decimal support', 'Use separate print statements'],
            }
        ]
    },
    {
        id: 'py-04',
        title: 'Control Flow',
        description: 'Make decisions and repeat actions with if/else and loops.',
        completed: false,
        content: [
            { type: 'heading', content: 'If / Elif / Else' },
            { type: 'code', content: 'score = 85\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelse:\n    print("Grade: F")' },
            { type: 'heading', content: 'For Loop' },
            { type: 'code', content: 'for i in range(5):\n    print(f"Step {i}")\n\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)' },
            { type: 'heading', content: 'While Loop' },
            { type: 'code', content: 'count = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1' },
            { type: 'note', content: 'Python uses indentation for blocks. Be consistent with spaces (4 spaces recommended).' },
        ],
        keyTakeaways: [
            'if/elif/else for conditional execution',
            'for loops iterate over sequences and ranges',
            'while loops continue while condition is true',
            'break exits a loop, continue skips to next iteration',
            'Indentation defines code blocks'
        ],
        exercises: [
            {
                id: 'ex-py04-1',
                title: 'Sum of Numbers',
                difficulty: 'beginner',
                points: 10,
                instructions: 'Calculate sum of numbers from 1 to 100 using a for loop.',
                initialCode: 'total = 0\n# Your loop here\nprint(f"Sum: {total}")',
                solution: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(f"Sum: {total}")',
                hints: ['Use range(1, 101)', 'Add i to total each iteration'],
            },
            {
                id: 'ex-py04-2',
                title: 'Number Guessing Game',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Create a guessing game where the user guesses a secret number (1-100). Give hints "too high" or "too low".',
                initialCode: 'secret = 42\n# Guessing loop',
                solution: 'secret = 42\nwhile True:\n    guess = int(input("Guess the number (1-100): "))\n    if guess == secret:\n        print("Correct!")\n        break\n    elif guess < secret:\n        print("Too low!")\n    else:\n        print("Too high!")',
                hints: ['Use while True loop', 'Break when guessed correctly', 'Use if/elif for hints'],
            },
            {
                id: 'ex-py04-3',
                title: 'FizzBuzz',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Print numbers 1 to 50. For multiples of 3 print "Fizz", for 5 print "Buzz", for both print "FizzBuzz".',
                initialCode: '# Your FizzBuzz implementation',
                solution: 'for i in range(1, 51):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)',
                hints: ['Check divisibility with % operator', 'Check both conditions first'],
            }
        ]
    },
    {
        id: 'py-05',
        title: 'Functions',
        description: 'Define reusable blocks of code with parameters and return values.',
        completed: false,
        content: [
            { type: 'heading', content: 'Defining Functions' },
            { type: 'code', content: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Alex")\ngreet("World")' },
            { type: 'heading', content: 'Return Values' },
            { type: 'code', content: 'def add(a, b):\n    return a + b\n\nresult = add(10, 25)\nprint(result)' },
            { type: 'heading', content: 'Default Parameters' },
            { type: 'code', content: 'def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))     # 9\nprint(power(2, 10)) # 1024' },
            { type: 'note', content: 'Functions should do one thing and do it well — Single Responsibility Principle.' },
        ],
        keyTakeaways: [
            'def keyword defines functions',
            'Parameters are inputs to functions',
            'return sends a value back to caller',
            'Default parameters provide fallback values',
            'Docstrings document function purpose'
        ],
        exercises: [
            {
                id: 'ex-py05-1',
                title: 'Temperature Converter',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Write a function to convert Celsius to Fahrenheit.',
                initialCode: 'def celsius_to_fahrenheit(celsius):\n    # Return Fahrenheit\n\n# Test the function',
                solution: 'def celsius_to_fahrenheit(celsius):\n    return celsius * 9/5 + 32\n\nprint(celsius_to_fahrenheit(0))   # 32.0\nprint(celsius_to_fahrenheit(100)) # 212.0',
                hints: ['Formula: F = C * 9/5 + 32'],
            },
            {
                id: 'ex-py05-2',
                title: 'is_even Function',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Write a function that returns True if a number is even, False otherwise.',
                initialCode: 'def is_even(n):\n    # Return boolean\n\n# Test with various numbers',
                solution: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))   # True\nprint(is_even(7))   # False',
                hints: ['Use modulo operator %', 'Return boolean directly'],
            },
            {
                id: 'ex-py05-3',
                title: 'Factorial Function',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Write a recursive function to calculate factorial.',
                initialCode: 'def factorial(n):\n    # Recursive implementation\n\nprint(factorial(5)) # Should print 120',
                solution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))',
                hints: ['Base case: n <= 1 returns 1', 'Recursive case: n * factorial(n-1)'],
            }
        ]
    },
    {
        id: 'py-06',
        title: 'Lists & Tuples',
        description: 'Store ordered collections of items.',
        completed: false,
        content: [
            { type: 'heading', content: 'Creating Lists' },
            { type: 'code', content: 'fruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4]\nmixed = [1, "hello", 3.14, True]' },
            { type: 'heading', content: 'List Operations' },
            { type: 'code', content: 'fruits.append("orange")\nfruits.insert(1, "kiwi")\nfruits.remove("banana")\nprint(fruits[0])\nprint(fruits[-1])' },
            { type: 'heading', content: 'Slicing' },
            { type: 'code', content: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[2:5])   # [2, 3, 4]\nprint(nums[:3])    # [0, 1, 2]\nprint(nums[::2])   # [0, 2, 4]' },
            { type: 'note', content: 'Lists are mutable; tuples are immutable. Use tuples for fixed data.' },
        ],
        keyTakeaways: [
            'Lists store ordered, mutable sequences',
            'Use [] to create lists',
            'Indexing starts at 0',
            'Slicing creates sublists',
            'Tuples are immutable lists'
        ],
        exercises: [
            {
                id: 'ex-py06-1',
                title: 'List Reversal',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Reverse a list without using reverse() method.',
                initialCode: 'nums = [1, 2, 3, 4, 5]\n# Reverse using slicing\nprint(nums)',
                solution: 'nums = [1, 2, 3, 4, 5]\nreversed_nums = nums[::-1]\nprint(reversed_nums)',
                hints: ['Use slicing with step -1'],
            },
            {
                id: 'ex-py06-2',
                title: 'List Comprehension',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Create a list of squares for numbers 1 to 10 using list comprehension.',
                initialCode: '# List comprehension for squares\nsquares = []\nprint(squares)',
                solution: 'squares = [x**2 for x in range(1, 11)]\nprint(squares)',
                hints: ['Syntax: [expression for item in iterable]'],
            },
            {
                id: 'ex-py06-3',
                title: 'Even Numbers Filter',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Filter a list to only include even numbers using list comprehension.',
                initialCode: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = # Your comprehension\nprint(evens)',
                solution: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)',
                hints: ['Add if condition after the for clause'],
            }
        ]
    },
    {
        id: 'py-07',
        title: 'Dictionaries',
        description: 'Store key‑value pairs for fast lookups.',
        completed: false,
        content: [
            { type: 'heading', content: 'Creating Dictionaries' },
            { type: 'code', content: 'student = {\n    "name": "Alice",\n    "age": 20,\n    "courses": ["Math", "CS"]\n}' },
            { type: 'heading', content: 'Accessing & Modifying' },
            { type: 'code', content: 'print(student["name"])\nstudent["age"] = 21\nstudent["grade"] = "A"\nprint(student.get("major", "Not set"))' },
            { type: 'heading', content: 'Iterating' },
            { type: 'code', content: 'for key, value in student.items():\n    print(f"{key}: {value}")' },
            { type: 'note', content: 'Use keys that are immutable (strings, numbers, tuples).' },
        ],
        keyTakeaways: [
            'Dictionaries store key-value pairs',
            'Keys must be immutable',
            'Use .get() for safe access',
            'items() yields key-value pairs',
            'Dictionaries are unordered (but preserve insertion order in Python 3.7+)'
        ],
        exercises: [
            {
                id: 'ex-py07-1',
                title: 'Phonebook',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Create a phonebook dictionary and implement lookup.',
                initialCode: 'phonebook = {"Alice": "123-4567", "Bob": "987-6543"}\n# Lookup loop',
                solution: 'phonebook = {"Alice": "123-4567", "Bob": "987-6543"}\nwhile True:\n    name = input("Enter name (or quit): ")\n    if name == "quit":\n        break\n    number = phonebook.get(name)\n    if number:\n        print(f"{name}: {number}")\n    else:\n        print("Not found")',
                hints: ['Use .get() to avoid KeyError'],
            },
            {
                id: 'ex-py07-2',
                title: 'Word Counter',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Count the frequency of each word in a sentence using a dictionary.',
                initialCode: 'sentence = "the quick brown fox jumps over the lazy dog"\n# Count word frequencies',
                solution: 'sentence = "the quick brown fox jumps over the lazy dog"\nwords = sentence.split()\nword_count = {}\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + 1\nprint(word_count)',
                hints: ['Split string into words', 'Use .get() with default 0'],
            }
        ]
    },
    {
        id: 'py-08',
        title: 'String Methods',
        description: 'Manipulate and analyze text with built‑in string methods.',
        completed: false,
        content: [
            { type: 'heading', content: 'Useful String Methods' },
            { type: 'code', content: 'text = "  Hello, World!  "\nprint(text.strip())\nprint(text.lower())\nprint(text.upper())\nprint(text.replace("World", "Python"))\nprint(text.split(","))' },
            { type: 'heading', content: 'Checking Content' },
            { type: 'code', content: 'print("Python123".isalpha())\nprint("Python123".isalnum())\nprint("Hello".startswith("He"))' },
            { type: 'heading', content: 'Joining' },
            { type: 'code', content: 'words = ["apple", "banana", "cherry"]\nresult = "-".join(words)\nprint(result)' },
        ],
        keyTakeaways: [
            'Strings have many built-in methods',
            'strip() removes whitespace',
            'lower()/upper() change case',
            'split() breaks string into list',
            'join() combines list into string'
        ],
        exercises: [
            {
                id: 'ex-py08-1',
                title: 'Palindrome Checker',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Check if a string reads the same forwards and backwards.',
                initialCode: 'def is_palindrome(s):\n    # Your code\n    pass\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("hello"))',
                solution: 'def is_palindrome(s):\n    s = s.lower().replace(" ", "")\n    return s == s[::-1]\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("A man a plan a canal panama"))',
                hints: ['Remove spaces', 'Convert to lowercase', 'Compare with reversed string'],
            },
            {
                id: 'ex-py08-2',
                title: 'Email Extractor',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Extract the username and domain from an email address.',
                initialCode: 'email = "user@example.com"\n# Extract username and domain',
                solution: 'email = "user@example.com"\nparts = email.split("@")\nusername = parts[0]\ndomain = parts[1]\nprint(f"Username: {username}")\nprint(f"Domain: {domain}")',
                hints: ['Use split("@") to separate'],
            }
        ]
    },
    {
        id: 'py-09',
        title: 'List Comprehensions',
        description: 'Create lists elegantly with a compact syntax.',
        completed: false,
        content: [
            { type: 'heading', content: 'Basic Syntax' },
            { type: 'code', content: 'squares = [x**2 for x in range(10)]\nprint(squares)' },
            { type: 'heading', content: 'With Condition' },
            { type: 'code', content: 'evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)' },
            { type: 'heading', content: 'Nested Comprehensions' },
            { type: 'code', content: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(flattened)' },
        ],
        keyTakeaways: [
            'List comprehensions are concise',
            'Syntax: [expr for item in iterable if condition]',
            'More readable than map/filter for simple cases',
            'Can be nested for multi-dimensional data',
            'Use for simple transformations'
        ],
        exercises: [
            {
                id: 'ex-py09-1',
                title: 'Squares of Evens',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Create a list of squares of even numbers from 1 to 20.',
                initialCode: '# List comprehension here\nresult = []\nprint(result)',
                solution: 'result = [x**2 for x in range(1, 21) if x % 2 == 0]\nprint(result)',
                hints: ['Use if condition in comprehension', 'x**2 for square'],
            },
            {
                id: 'ex-py09-2',
                title: 'Matrix Transpose',
                difficulty: 'advanced',
                points: 30,
                instructions: 'Transpose a 3x3 matrix using nested list comprehension.',
                initialCode: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n# Transpose using comprehension\nprint(transpose)',
                solution: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ntranspose = [[row[i] for row in matrix] for i in range(3)]\nprint(transpose)',
                hints: ['Outer loop over columns', 'Inner loop over rows'],
            }
        ]
    },
    {
        id: 'py-10',
        title: 'File I/O',
        description: 'Read from and write to files on disk.',
        completed: false,
        content: [
            { type: 'heading', content: 'Writing to Files' },
            { type: 'code', content: 'with open("output.txt", "w") as file:\n    file.write("Hello, file!\\n")\n    file.write("Second line\\n")' },
            { type: 'heading', content: 'Reading from Files' },
            { type: 'code', content: 'with open("output.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# Read line by line\nwith open("output.txt", "r") as file:\n    for line in file:\n        print(line.strip())' },
            { type: 'heading', content: 'Appending' },
            { type: 'code', content: 'with open("output.txt", "a") as file:\n    file.write("This line is appended\\n")' },
        ],
        keyTakeaways: [
            'Use with statement for automatic closing',
            'Modes: "r" read, "w" write, "a" append',
            'read() reads entire file',
            'readline() reads one line',
            'Write with write() method'
        ],
        exercises: [
            {
                id: 'ex-py10-1',
                title: 'Number Writer/Reader',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Write numbers to file, then read back and sum them.',
                initialCode: '# Write numbers to file\n# Read and sum',
                solution: 'with open("numbers.txt", "w") as f:\n    for i in range(1, 6):\n        f.write(f"{i}\\n")\n\ntotal = 0\nwith open("numbers.txt", "r") as f:\n    for line in f:\n        total += int(line.strip())\nprint(f"Sum: {total}")',
                hints: ['Use strip() to remove newline', 'Convert to int for summing'],
            },
            {
                id: 'ex-py10-2',
                title: 'File Copy',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Copy contents from one file to another.',
                initialCode: '# Copy source.txt to destination.txt',
                solution: 'with open("source.txt", "r") as source:\n    content = source.read()\nwith open("destination.txt", "w") as dest:\n    dest.write(content)',
                hints: ['Read from source', 'Write to destination'],
            }
        ]
    },
    {
        id: 'py-11',
        title: 'Exception Handling',
        description: 'Handle errors gracefully with try/except.',
        completed: false,
        content: [
            { type: 'heading', content: 'Basic Try/Except' },
            { type: 'code', content: 'try:\n    x = int(input("Enter a number: "))\n    print(f"100 / {x} = {100/x}")\nexcept ValueError:\n    print("Not a valid number!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")' },
            { type: 'heading', content: 'Else and Finally' },
            { type: 'code', content: 'try:\n    file = open("data.txt", "r")\nexcept FileNotFoundError:\n    print("File not found")\nelse:\n    print(file.read())\n    file.close()\nfinally:\n    print("Complete")' },
        ],
        keyTakeaways: [
            'try/except catches exceptions',
            'Catch specific exceptions',
            'else runs if no exception',
            'finally always runs',
            'Use raise to throw exceptions'
        ],
        exercises: [
            {
                id: 'ex-py11-1',
                title: 'Safe Division',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Handle division by zero and invalid input.',
                initialCode: '# Get numerator and denominator\n# Handle exceptions',
                solution: 'try:\n    a = float(input("Numerator: "))\n    b = float(input("Denominator: "))\n    result = a / b\n    print(f"Result: {result}")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\nexcept ValueError:\n    print("Please enter valid numbers.")',
                hints: ['Catch ValueError for invalid input', 'Catch ZeroDivisionError for division by zero'],
            }
        ]
    },
    {
        id: 'py-12',
        title: 'Modules & Packages',
        description: 'Organize code across multiple files.',
        completed: false,
        content: [
            { type: 'heading', content: 'Importing Modules' },
            { type: 'code', content: 'import math\nimport random\nfrom datetime import datetime\n\nprint(math.sqrt(16))\nprint(random.randint(1, 10))\nprint(datetime.now())' },
            { type: 'heading', content: 'Aliasing' },
            { type: 'code', content: 'import numpy as np\nfrom math import sqrt as square_root' },
        ],
        keyTakeaways: [
            'import brings external modules',
            'from imports specific functions',
            'as creates aliases',
            'Python has extensive standard library',
            'Create your own modules with .py files'
        ],
        exercises: [
            {
                id: 'ex-py12-1',
                title: 'Random Dice Roller',
                difficulty: 'beginner',
                points: 15,
                instructions: 'Simulate rolling a die 10 times using random module.',
                initialCode: 'import random\n# Roll die 10 times',
                solution: 'import random\nfor _ in range(10):\n    print(random.randint(1, 6))',
                hints: ['Use randint(1, 6)'],
            }
        ]
    },
    {
        id: 'py-13',
        title: 'Classes & Objects (OOP)',
        description: 'Model real‑world entities with classes.',
        completed: false,
        content: [
            { type: 'heading', content: 'Defining a Class' },
            { type: 'code', content: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Rex", 3)\nprint(my_dog.bark())' },
            { type: 'heading', content: 'Inheritance' },
            { type: 'code', content: 'class Animal:\n    def speak(self):\n        pass\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow!"' },
        ],
        keyTakeaways: [
            'Classes define blueprints for objects',
            '__init__ is constructor method',
            'self refers to current instance',
            'Inheritance reuses parent class code',
            'Encapsulation hides internal details'
        ],
        exercises: [
            {
                id: 'ex-py13-1',
                title: 'Bank Account',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Create BankAccount class with deposit/withdraw methods.',
                initialCode: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        # Initialize\n    def deposit(self, amount):\n        # Add money\n    def withdraw(self, amount):\n        # Remove money with check',
                solution: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds")\n        else:\n            self.balance -= amount\n        return self.balance\n\nacc = BankAccount("Alice", 100)\nacc.deposit(50)\nacc.withdraw(30)\nprint(acc.balance)',
                hints: ['Check balance before withdrawal', 'Update balance after transaction'],
            }
        ]
    },
    {
        id: 'py-14',
        title: 'Lambda & Map/Filter',
        description: 'Functional programming tools in Python.',
        completed: false,
        content: [
            { type: 'heading', content: 'Lambda Functions' },
            { type: 'code', content: 'square = lambda x: x**2\nprint(square(5))' },
            { type: 'heading', content: 'map()' },
            { type: 'code', content: 'numbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)' },
            { type: 'heading', content: 'filter()' },
            { type: 'code', content: 'evens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)' },
        ],
        keyTakeaways: [
            'Lambda: anonymous one-line functions',
            'map applies function to every item',
            'filter keeps items that satisfy condition',
            'Often replaceable with list comprehensions',
            'Use for simple, throwaway functions'
        ],
        exercises: [
            {
                id: 'ex-py14-1',
                title: 'Temperature Conversion with map',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Convert list of Celsius temps to Fahrenheit using map.',
                initialCode: 'celsius = [0, 20, 30, 40]\n# Use map and lambda\nfahrenheit = list(...)\nprint(fahrenheit)',
                solution: 'celsius = [0, 20, 30, 40]\nfahrenheit = list(map(lambda c: c * 9/5 + 32, celsius))\nprint(fahrenheit)',
                hints: ['Lambda takes one argument', 'Formula: c * 9/5 + 32'],
            }
        ]
    },
    {
        id: 'py-15',
        title: 'Decorators',
        description: 'Modify function behavior with decorators.',
        completed: false,
        content: [
            { type: 'heading', content: 'Basic Decorator' },
            { type: 'code', content: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"Took {time.time()-start:.2f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return "Done"\n\nslow_function()' },
        ],
        keyTakeaways: [
            'Decorators wrap functions',
            'Use @decorator syntax',
            'Common for logging, timing, caching',
            'Can stack multiple decorators',
            'Preserve function metadata with functools.wraps'
        ],
        exercises: [
            {
                id: 'ex-py15-1',
                title: 'Logging Decorator',
                difficulty: 'advanced',
                points: 30,
                instructions: 'Create a decorator that logs function calls with arguments.',
                initialCode: 'def logger(func):\n    # Your decorator\n    pass\n\n@logger\ndef add(a, b):\n    return a + b\n\nadd(3, 5)',
                solution: 'def logger(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")\n        result = func(*args, **kwargs)\n        print(f"Returned: {result}")\n        return result\n    return wrapper\n\n@logger\ndef add(a, b):\n    return a + b\n\nadd(3, 5)',
                hints: ['Use *args and **kwargs', 'Print before and after calling'],
            }
        ]
    },
    {
        id: 'py-16',
        title: 'Generators',
        description: 'Create memory-efficient iterators with yield.',
        completed: false,
        content: [
            { type: 'heading', content: 'Generator Functions' },
            { type: 'code', content: 'def count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nfor num in count_up_to(5):\n    print(num)' },
            { type: 'heading', content: 'Generator Expressions' },
            { type: 'code', content: 'squares = (x**2 for x in range(10))\nprint(next(squares))' },
        ],
        keyTakeaways: [
            'Generators yield values one at a time',
            'Memory efficient for large sequences',
            'Use yield instead of return',
            'Generator expressions use () not []',
            'Can only iterate once'
        ],
        exercises: [
            {
                id: 'ex-py16-1',
                title: 'Fibonacci Generator',
                difficulty: 'intermediate',
                points: 25,
                instructions: 'Create a generator that yields Fibonacci numbers.',
                initialCode: 'def fibonacci():\n    # Yield Fibonacci numbers\n    pass\n\n# Test: print first 10 Fibonacci numbers',
                solution: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nfor _ in range(10):\n    print(next(fib))',
                hints: ['Start with a=0, b=1', 'Yield a, then update'],
            }
        ]
    },
    {
        id: 'py-17',
        title: 'Working with JSON',
        description: 'Parse and generate JSON data.',
        completed: false,
        content: [
            { type: 'heading', content: 'JSON in Python' },
            { type: 'code', content: 'import json\n\n# Convert dict to JSON\ndata = {"name": "Alice", "age": 25}\njson_str = json.dumps(data)\nprint(json_str)\n\n# Convert JSON to dict\nparsed = json.loads(json_str)\nprint(parsed["name"])' },
        ],
        keyTakeaways: [
            'json.dumps() converts to string',
            'json.loads() parses from string',
            'json.dump() writes to file',
            'json.load() reads from file',
            'Common for APIs and config files'
        ],
        exercises: [
            {
                id: 'ex-py17-1',
                title: 'JSON File Reader',
                difficulty: 'intermediate',
                points: 20,
                instructions: 'Read a JSON file and print specific fields.',
                initialCode: 'import json\n# Read data.json and print all names',
                solution: 'import json\nwith open("data.json", "r") as f:\n    data = json.load(f)\nfor item in data:\n    print(item["name"])',
                hints: ['Use json.load() for files', 'Iterate through list'],
            }
        ]
    },
    {
        id: 'py-18',
        title: 'Regular Expressions',
        description: 'Pattern matching with regex.',
        completed: false,
        content: [
            { type: 'heading', content: 'Basic Regex' },
            { type: 'code', content: 'import re\n\ntext = "My email is alice@example.com"\npattern = r"\\w+@\\w+\\.\\w+"\nemail = re.search(pattern, text)\nif email:\n    print(email.group())' },
        ],
        keyTakeaways: [
            're module provides regex support',
            'search() finds first match',
            'findall() finds all matches',
            'Raw strings (r"...") recommended',
            'Common for validation and extraction'
        ],
        exercises: [
            {
                id: 'ex-py18-1',
                title: 'Email Validator',
                difficulty: 'advanced',
                points: 30,
                instructions: 'Validate email addresses using regex.',
                initialCode: 'import re\n\ndef is_valid_email(email):\n    # Return True if valid\n    pass',
                solution: 'import re\n\ndef is_valid_email(email):\n    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"\n    return bool(re.match(pattern, email))\n\nprint(is_valid_email("alice@example.com"))\nprint(is_valid_email("invalid"))',
                hints: ['Use re.match()', 'Common pattern: username@domain.tld'],
            }
        ]
    },
    {
        id: 'py-19',
        title: 'Multithreading',
        description: 'Run multiple tasks concurrently.',
        completed: false,
        content: [
            { type: 'heading', content: 'Threading Basics' },
            { type: 'code', content: 'import threading\nimport time\n\ndef print_numbers():\n    for i in range(5):\n        time.sleep(1)\n        print(i)\n\ndef print_letters():\n    for letter in "ABCDE":\n        time.sleep(1)\n        print(letter)\n\nthread1 = threading.Thread(target=print_numbers)\nthread2 = threading.Thread(target=print_letters)\nthread1.start()\nthread2.start()\nthread1.join()\nthread2.join()' },
        ],
        keyTakeaways: [
            'Threading allows concurrent execution',
            'Use threading.Thread() to create threads',
            'start() begins execution',
            'join() waits for completion',
            'Be careful with shared data'
        ],
        exercises: [
            {
                id: 'ex-py19-1',
                title: 'Parallel Counter',
                difficulty: 'advanced',
                points: 35,
                instructions: 'Run two counters simultaneously using threads.',
                initialCode: 'import threading\n# Create and start two threads\n# Each counts to 10',
                solution: 'import threading\nimport time\n\ndef counter(name, limit):\n    for i in range(limit):\n        print(f"{name}: {i}")\n        time.sleep(0.5)\n\nt1 = threading.Thread(target=counter, args=("A", 10))\nt2 = threading.Thread(target=counter, args=("B", 10))\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
                hints: ['Pass arguments via args tuple', 'Use sleep to see concurrency'],
            }
        ]
    },
    {
        id: 'py-20',
        title: 'Web Requests with Requests',
        description: 'Fetch data from the web.',
        completed: false,
        content: [
            { type: 'heading', content: 'Making Requests' },
            { type: 'code', content: 'import requests\n\nresponse = requests.get("https://api.github.com/users/octocat")\nif response.status_code == 200:\n    data = response.json()\n    print(f"Name: {data["name"]}")\n    print(f"Followers: {data["followers"]}")' },
        ],
        keyTakeaways: [
            'requests.get() fetches data',
            'Check status_code for success',
            '.json() parses JSON response',
            'Handle exceptions for network errors',
            'Install: pip install requests'
        ],
        exercises: [
            {
                id: 'ex-py20-1',
                title: 'API Fetcher',
                difficulty: 'advanced',
                points: 35,
                instructions: 'Fetch and display random user data from randomuser.me API.',
                initialCode: 'import requests\n# Fetch random user data\n# Print name and location',
                solution: 'import requests\n\nresponse = requests.get("https://randomuser.me/api/")\nif response.status_code == 200:\n    data = response.json()\n    user = data["results"][0]\n    name = f"{user["name"]["first"]} {user["name"]["last"]}"\n    location = f"{user["location"]["city"]}, {user["location"]["country"]}"\n    print(f"Name: {name}")\n    print(f"Location: {location}")',
                hints: ['Check status_code', 'Navigate nested JSON carefully'],
            }
        ]
    }
];

export default pythonLessons;