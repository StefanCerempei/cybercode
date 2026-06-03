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
        exercises: [
            {
                id: 'ex-py01-1',
                title: 'Personal Greeting',
                instructions: 'Write a Python program that prints "Hello, [your name]!" using a variable.',
                initialCode: '# Your code here\nname = "Your name"\n# print your greeting',
                solution: 'name = "Alice"\nprint(f"Hello, {name}!")',
                hints: ['Use an f-string or concatenation.']
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
            { type: 'text', content: 'A variable is a named container for a value. In Python, you do not declare a type — Python figures it out automatically.' },
            { type: 'code', content: 'name = "Alex"\nage = 25\nheight = 1.82\nis_hacker = True\n\nprint(name, age)' },
            { type: 'heading', content: 'Basic Data Types' },
            { type: 'list', items: ['int — whole numbers: 42, -7, 0', 'float — decimal numbers: 3.14, -0.5', 'str — text: "hello", \'world\'', 'bool — True or False', 'None — absence of a value'] },
            { type: 'heading', content: 'Type Checking' },
            { type: 'code', content: 'x = 42\nprint(type(x))   # <class \'int\'>\n\ny = "cyber"\nprint(type(y))   # <class \'str\'>' },
            { type: 'heading', content: 'String Operations' },
            { type: 'code', content: 'first = "Cyber"\nlast = "Code"\nfull = first + " " + last\nprint(full)         # Cyber Code\nprint(len(full))    # 10\nprint(full.upper()) # CYBER CODE' },
            { type: 'note', content: 'Python is dynamically typed — a variable can change type during execution. This is powerful but requires attention.' },
        ],
        exercises: [
            {
                id: 'ex-py02-1',
                title: 'Type Explorer',
                instructions: 'Create variables of different types (int, float, str, bool). Print each variable and its type using print() and type().',
                initialCode: '# Declare variables\n\n# Print them with types',
                solution: 'age = 25\nprice = 19.99\nname = "Python"\nis_fun = True\n\nprint(age, type(age))\nprint(price, type(price))\nprint(name, type(name))\nprint(is_fun, type(is_fun))',
                hints: ['Use type(variable) inside print().']
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
            { type: 'code', content: 'print("Hello!")             # Basic\nprint("A", "B", "C")       # Multiple values\nprint("Name:", "Alex")     # Label + value\nprint("Line 1\\nLine 2")   # Newline character' },
            { type: 'heading', content: 'F-Strings (Formatted Output)' },
            { type: 'text', content: 'F-strings let you embed variables directly inside strings with curly braces:' },
            { type: 'code', content: 'name = "Alex"\nscore = 98\nprint(f"Player {name} scored {score} points!")' },
            { type: 'heading', content: 'Reading User Input' },
            { type: 'code', content: 'name = input("Enter your name: ")\nprint(f"Welcome, {name}!")\n\nage = int(input("Enter your age: "))  # Convert to int\nprint(f"In 10 years you will be {age + 10}")' },
            { type: 'note', content: 'input() always returns a string. Use int() or float() to convert it to a number before doing math.' },
        ],
        exercises: [
            {
                id: 'ex-py03-1',
                title: 'Rectangle Area Calculator',
                instructions: 'Ask the user for length and width (floats), then compute and print the area (length * width).',
                initialCode: '# Get length and width from user\n# Compute area\n# Print result',
                solution: 'length = float(input("Enter length: "))\nwidth = float(input("Enter width: "))\narea = length * width\nprint(f"The area is {area:.2f}")',
                hints: ['Use float() to convert input.', 'Use f-string formatting for two decimals.']
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
            { type: 'code', content: 'score = 85\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: F")' },
            { type: 'heading', content: 'Comparison Operators' },
            { type: 'list', items: ['== equal to', '!= not equal', '> greater than', '< less than', '>= greater or equal', '<= less or equal'] },
            { type: 'heading', content: 'For Loop' },
            { type: 'code', content: '# Loop over a range\nfor i in range(5):\n    print(f"Step {i}")\n\n# Loop over a list\ntools = ["vim", "gdb", "gcc"]\nfor tool in tools:\n    print(f"Using {tool}")' },
            { type: 'heading', content: 'While Loop' },
            { type: 'code', content: 'count = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1\n\nprint("Done!")' },
        ],
        exercises: [
            {
                id: 'ex-py04-1',
                title: 'Sum of First N Numbers',
                instructions: 'Ask the user for a positive integer n, then use a loop to calculate the sum of numbers from 1 to n. Print the result.',
                initialCode: 'n = int(input("Enter n: "))\ntotal = 0\n# Your loop here\nprint(f"Sum: {total}")',
                solution: 'n = int(input("Enter n: "))\ntotal = 0\nfor i in range(1, n+1):\n    total += i\nprint(f"Sum: {total}")',
                hints: ['Use range(1, n+1).', 'Initialize total = 0.']
            }
        ]
    },
    {
        id: 'py-05',
        title: 'Functions',
        description: 'Define reusable blocks of code with parameters and return values.',
        completed: false,
        content: [
            { type: 'heading', content: 'Defining a Function' },
            { type: 'code', content: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Alex")\ngreet("World")' },
            { type: 'heading', content: 'Return Values' },
            { type: 'code', content: 'def add(a, b):\n    return a + b\n\nresult = add(10, 25)\nprint(result)  # 35' },
            { type: 'heading', content: 'Default Parameters' },
            { type: 'code', content: 'def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))     # 9  (uses default)\nprint(power(2, 10)) # 1024' },
            { type: 'heading', content: 'Multiple Return Values' },
            { type: 'code', content: 'def min_max(numbers):\n    return min(numbers), max(numbers)\n\nlow, high = min_max([4, 2, 9, 1, 7])\nprint(f"Min: {low}, Max: {high}")' },
            { type: 'note', content: 'Functions should do one thing and do it well. Keep them short and focused — this is called the Single Responsibility Principle.' },
        ],
        exercises: [
            {
                id: 'ex-py05-1',
                title: 'Fahrenheit to Celsius',
                instructions: 'Write a function `f_to_c(f)` that converts Fahrenheit to Celsius (formula: (f - 32) * 5/9). Then call it with a few test values.',
                initialCode: 'def f_to_c(f):\n    # Your code\n    pass\n\n# Test calls',
                solution: 'def f_to_c(f):\n    return (f - 32) * 5 / 9\n\nprint(f_to_c(32))   # 0.0\nprint(f_to_c(212))  # 100.0\nprint(f_to_c(98.6)) # 37.0',
                hints: ['Use floating point division (/).']
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
            { type: 'code', content: 'fruits = ["apple", "banana"]\nfruits.append("orange")    # add at end\nfruits.insert(1, "kiwi")   # insert at index\nfruits.remove("banana")     # remove by value\nprint(fruits[0])            # access by index\nprint(fruits[-1])           # last element' },
            { type: 'heading', content: 'Slicing' },
            { type: 'code', content: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[2:5])   # [2, 3, 4]\nprint(nums[:3])    # [0, 1, 2]\nprint(nums[3:])    # [3, 4, 5]\nprint(nums[::2])   # [0, 2, 4]' },
            { type: 'heading', content: 'Tuples (Immutable)' },
            { type: 'code', content: 'coordinates = (10, 20)\nprint(coordinates[0])   # 10\n# coordinates[0] = 5   # ERROR: tuple is immutable' },
            { type: 'note', content: 'Lists are mutable (changeable); tuples are immutable. Use tuples for fixed data like days of the week.' },
        ],
        exercises: [
            {
                id: 'ex-py06-1',
                title: 'List Reversal',
                instructions: 'Given the list `[1, 2, 3, 4, 5]`, reverse it without using the built-in `reverse()` method. Print the reversed list.',
                initialCode: 'nums = [1, 2, 3, 4, 5]\n# Your reversal code\nprint(nums)',
                solution: 'nums = [1, 2, 3, 4, 5]\nreversed_nums = nums[::-1]\nprint(reversed_nums)',
                hints: ['Use slicing with step -1.']
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
            { type: 'code', content: 'print(student["name"])       # Alice\nstudent["age"] = 21\nstudent["grade"] = "A"      # add new key\n\n# Safe access with .get()\nprint(student.get("major", "Not set"))' },
            { type: 'heading', content: 'Iterating Over Dictionaries' },
            { type: 'code', content: 'for key, value in student.items():\n    print(f"{key}: {value}")\n\nfor key in student.keys():\n    print(key)\n\nfor value in student.values():\n    print(value)' },
            { type: 'note', content: 'Dictionaries are unordered (before Python 3.7, now they remember insertion order). Use keys that are immutable (strings, numbers, tuples).' },
        ],
        exercises: [
            {
                id: 'ex-py07-1',
                title: 'Phonebook Lookup',
                instructions: 'Create a dictionary with names as keys and phone numbers as values. Write a loop that asks the user for a name and prints the number, or "Not found" if missing. Exit when user types "quit".',
                initialCode: 'phonebook = {"Alice": "123-4567", "Bob": "987-6543"}\n# Your loop',
                solution: 'phonebook = {"Alice": "123-4567", "Bob": "987-6543"}\nwhile True:\n    name = input("Enter name (or quit): ")\n    if name == "quit":\n        break\n    number = phonebook.get(name)\n    if number:\n        print(f"{name}: {number}")\n    else:\n        print("Not found")',
                hints: ['Use .get() to avoid KeyError.']
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
            { type: 'code', content: 'text = "  Hello, World!  "\nprint(text.strip())      # "Hello, World!"\nprint(text.lower())      # "  hello, world!  "\nprint(text.upper())      # "  HELLO, WORLD!  "\nprint(text.replace("World", "Python"))\nprint(text.split(","))   # ["  Hello", " World!  "]' },
            { type: 'heading', content: 'Checking Content' },
            { type: 'code', content: 'text = "Python123"\nprint(text.isalpha())  # False (has digits)\nprint(text.isalnum())  # True\nprint(text.startswith("Py"))  # True\nprint(text.endswith("123"))   # True' },
            { type: 'heading', content: 'Joining and Splitting' },
            { type: 'code', content: 'words = ["apple", "banana", "cherry"]\nresult = "-".join(words)\nprint(result)   # "apple-banana-cherry"\n\noriginal = result.split("-")\nprint(original) # ["apple", "banana", "cherry"]' },
        ],
        exercises: [
            {
                id: 'ex-py08-1',
                title: 'Palindrome Checker',
                instructions: 'Write a function `is_palindrome(s)` that returns True if the string reads the same forwards and backwards (ignoring case and spaces). Test with "A man a plan a canal panama".',
                initialCode: 'def is_palindrome(s):\n    # Normalize and check\n    pass\n\nprint(is_palindrome("racecar"))   # True\nprint(is_palindrome("hello"))     # False',
                solution: 'def is_palindrome(s):\n    normalized = s.replace(" ", "").lower()\n    return normalized == normalized[::-1]\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("A man a plan a canal panama"))\nprint(is_palindrome("hello"))',
                hints: ['Use .replace(" ", "") to remove spaces.', 'Use slicing [::-1] to reverse.']
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
            { type: 'code', content: 'squares = [x**2 for x in range(10)]\nprint(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]' },
            { type: 'heading', content: 'With Condition' },
            { type: 'code', content: 'even_squares = [x**2 for x in range(10) if x % 2 == 0]\nprint(even_squares)  # [0, 4, 16, 36, 64]' },
            { type: 'heading', content: 'Using Expressions' },
            { type: 'code', content: 'words = ["hello", "world", "python"]\nupper_words = [word.upper() for word in words]\nprint(upper_words)  # ["HELLO", "WORLD", "PYTHON"]' },
            { type: 'heading', content: 'Nested Loops' },
            { type: 'code', content: 'pairs = [(x, y) for x in [1,2] for y in [3,4]]\nprint(pairs)  # [(1,3), (1,4), (2,3), (2,4)]' },
            { type: 'note', content: 'List comprehensions are faster and more readable than manual for‑loops for simple transformations.' },
        ],
        exercises: [
            {
                id: 'ex-py09-1',
                title: 'Even Numbers Only',
                instructions: 'Given a list of numbers, use a list comprehension to create a new list containing only the even numbers. Example: [1,2,3,4,5,6] → [2,4,6]',
                initialCode: 'numbers = [10, 15, 22, 33, 44, 55]\nevens = # Your comprehension\nprint(evens)',
                solution: 'numbers = [10, 15, 22, 33, 44, 55]\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)',
                hints: ['Use `if n % 2 == 0` inside the comprehension.']
            }
        ]
    },
    {
        id: 'py-10',
        title: 'File I/O',
        description: 'Read from and write to files on disk.',
        completed: false,
        content: [
            { type: 'heading', content: 'Writing to a File' },
            { type: 'code', content: 'with open("output.txt", "w") as file:\n    file.write("Hello, file!\\n")\n    file.write("Second line\\n")' },
            { type: 'heading', content: 'Reading from a File' },
            { type: 'code', content: 'with open("output.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# Read line by line\nwith open("output.txt", "r") as file:\n    for line in file:\n        print(line.strip())' },
            { type: 'heading', content: 'Appending' },
            { type: 'code', content: 'with open("output.txt", "a") as file:\n    file.write("This line is appended\\n")' },
            { type: 'note', content: 'Always use a `with` statement (context manager) — it automatically closes the file, even if an error occurs.' },
        ],
        exercises: [
            {
                id: 'ex-py10-1',
                title: 'Write and Read Back',
                instructions: 'Write a program that asks the user for 3 numbers, writes each on a new line to "numbers.txt", then reads the file back and prints the sum of the numbers.',
                initialCode: '# Write three numbers\n\n# Read and sum',
                solution: 'with open("numbers.txt", "w") as f:\n    for i in range(3):\n        num = input(f"Enter number {i+1}: ")\n        f.write(num + "\\n")\n\ntotal = 0\nwith open("numbers.txt", "r") as f:\n    for line in f:\n        total += int(line.strip())\nprint(f"Sum: {total}")',
                hints: ['Use int() when reading back.', 'strip() removes newline characters.']
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
            { type: 'code', content: 'try:\n    x = int(input("Enter a number: "))\n    print(f"100 / {x} = {100/x}")\nexcept ValueError:\n    print("That was not a valid number!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")' },
            { type: 'heading', content: 'Else and Finally' },
            { type: 'code', content: 'try:\n    file = open("data.txt", "r")\nexcept FileNotFoundError:\n    print("File not found")\nelse:\n    print(file.read())\n    file.close()\nfinally:\n    print("Execution complete")' },
            { type: 'heading', content: 'Raising Exceptions' },
            { type: 'code', content: 'def set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return age' },
            { type: 'note', content: 'Catch specific exceptions, not just a bare `except:`. This prevents hiding unexpected bugs.' },
        ],
        exercises: [
            {
                id: 'ex-py11-1',
                title: 'Safe Division',
                instructions: 'Write a program that asks for two numbers and divides them. Handle division by zero and non‑numeric input gracefully.',
                initialCode: '# Get numerator and denominator\n# Try division',
                solution: 'try:\n    a = float(input("Numerator: "))\n    b = float(input("Denominator: "))\n    result = a / b\n    print(f"Result: {result}")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\nexcept ValueError:\n    print("Please enter valid numbers.")',
                hints: ['Use float() conversion inside try block.']
            }
        ]
    },
    {
        id: 'py-12',
        title: 'Modules & Packages',
        description: 'Organize code across multiple files and use the standard library.',
        completed: false,
        content: [
            { type: 'heading', content: 'Importing Modules' },
            { type: 'code', content: 'import math\nimport random\nfrom datetime import datetime\n\nprint(math.sqrt(16))          # 4.0\nprint(random.randint(1, 10))  # random integer\nprint(datetime.now())         # current time' },
            { type: 'heading', content: 'Creating Your Own Module' },
            { type: 'text', content: 'Save the following as `mymodule.py`:' },
            { type: 'code', content: '# mymodule.py\ndef greet(name):\n    return f"Hello, {name}!"\n\nPI = 3.14159' },
            { type: 'text', content: 'Then import and use it in another file:' },
            { type: 'code', content: 'import mymodule\nprint(mymodule.greet("Alice"))\nprint(mymodule.PI)' },
            { type: 'heading', content: 'Aliasing' },
            { type: 'code', content: 'import numpy as np   # common alias\nfrom math import sqrt as square_root' },
        ],
        exercises: [
            {
                id: 'ex-py12-1',
                title: 'Roll a Die',
                instructions: 'Use the `random` module to simulate rolling a six‑sided die 10 times. Print each result.',
                initialCode: 'import random\n# Your loop',
                solution: 'import random\nfor _ in range(10):\n    print(random.randint(1, 6))',
                hints: ['Use randint(1, 6).']
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
            { type: 'code', content: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n    \n    def get_human_years(self):\n        return self.age * 7\n\n# Create an object\nmy_dog = Dog("Rex", 3)\nprint(my_dog.bark())\nprint(my_dog.get_human_years())' },
            { type: 'heading', content: 'Class vs Instance Variables' },
            { type: 'code', content: 'class Player:\n    species = "Human"   # class variable\n    \n    def __init__(self, name):\n        self.name = name   # instance variable' },
            { type: 'heading', content: 'Inheritance' },
            { type: 'code', content: 'class Student(Person):\n    def __init__(self, name, student_id):\n        super().__init__(name)\n        self.student_id = student_id' },
            { type: 'note', content: '`self` refers to the current instance. Always include it as the first parameter of instance methods.' },
        ],
        exercises: [
            {
                id: 'ex-py13-1',
                title: 'Bank Account Class',
                instructions: 'Create a `BankAccount` class with `owner`, `balance` attributes, and methods `deposit(amount)`, `withdraw(amount)`. Ensure withdrawal does not exceed balance.',
                initialCode: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        # your code\n        pass\n    # methods\n\n# Test it',
                solution: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds")\n        else:\n            self.balance -= amount\n        return self.balance\n\nacc = BankAccount("Alice", 100)\nacc.deposit(50)\nacc.withdraw(30)\nprint(acc.balance)  # 120',
                hints: ['Check withdrawal condition with if.']
            }
        ]
    },
    {
        id: 'py-14',
        title: 'Lambda Functions & Map/Filter',
        description: 'Write small anonymous functions and use functional programming tools.',
        completed: false,
        content: [
            { type: 'heading', content: 'Lambda Functions' },
            { type: 'code', content: 'square = lambda x: x**2\nprint(square(5))  # 25\n\n# Often used inline\nresult = (lambda a, b: a + b)(3, 4)\nprint(result)  # 7' },
            { type: 'heading', content: 'map()' },
            { type: 'code', content: 'numbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # [1, 4, 9, 16]' },
            { type: 'heading', content: 'filter()' },
            { type: 'code', content: 'numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)  # [2, 4, 6]' },
            { type: 'heading', content: 'Combining with List Comprehensions' },
            { type: 'text', content: 'Often list comprehensions are more readable, but lambdas are useful for small throwaway functions.' },
            { type: 'code', content: '# List comprehension equivalent:\nsquared = [x**2 for x in numbers]\nevens = [x for x in numbers if x % 2 == 0]' },
        ],
        exercises: [
            {
                id: 'ex-py14-1',
                title: 'Celsius to Fahrenheit with map',
                instructions: 'Given a list of Celsius temperatures `[0, 20, 30, 40]`, use `map` and a lambda to convert each to Fahrenheit (F = C*9/5+32). Print the new list.',
                initialCode: 'celsius = [0, 20, 30, 40]\n# Use map and lambda\nfahrenheit = list(...)\nprint(fahrenheit)',
                solution: 'celsius = [0, 20, 30, 40]\nfahrenheit = list(map(lambda c: c * 9/5 + 32, celsius))\nprint(fahrenheit)  # [32.0, 68.0, 86.0, 104.0]',
                hints: ['The lambda takes one argument and returns the formula.']
            }
        ]
    }
];

export default pythonLessons;