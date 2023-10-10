# What is React ? 
 < React is a JavaScript library created by Facebook. 
 React is a User Interface (UI) library.
 React is a tool for building UI components.>

# Who made React?
< React was created by Jordan Walke, a software engineer at Facebook. He was inspired by the functional programming language Lisp and sought to create a library that would allow developers to create reusable components that could be easily combined to build complex user interfaces. >

# What is Bable?
< Babel is a very famous transpiler that basically allows us to use future JavaScript in today’s browsers. In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. Transpiler is a tool that is used to convert source code into another source code that is of the same levelThe latest standard version which JavaScript follows is ES2020 which is not fully supported by all browsers hence we make use of a tool such as ‘babel’ so that we can convert it into the code that today’s browser understands. >

# How does Babel convert html code in React into valid code?
< A user can essentially use future JavaScript in the browsers of today thanks to Babel, a very well-known transpiler.
The standard method has the ability to accurately translate the newest JavaScript code into a format that the browser can properly understand.
Babel is a key tool that can translate JSX syntax, which is used to create HTML-like code in React components, into valid JavaScript code that can be executed in preferred browsers. >

# What is ReactDOM used for? Write an example?
< ReactDOM is used to render components and elements on the web. It is a part of the React library used to create user interfaces and dynamic web applications, as well as reusable and composable components that can be used in different applications. Examples -- React-dom: Components
React-dom: APIs
React-dom: Client APIs
React-dom: Server APIs >

# What are the packages that you need to import for react to work with?
< Node installed on your computer. You can download Node at nodejs.org. Create React App requires a Node version of at least 10.
A package manager called npm. It is automatically included in your installation of Node. You need to have an npm version of at least 5.2.
A good code editor to work with our project files. I highly recommend using the editor Visual Studio Code. You can grab it at code.visualstudio.com. >

# How do you add react to a web application?
< Set up a JavaScript environment that lets you use the JSX syntax, split your code into modules with the import / export syntax, and use packages (for example, React) from the npm package registry.
Render your React components where you want to see them on the page. >

# What is React.createElement?
< React. createElement( type, [props], [... children] ) Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span' ), a React component type (a class or a function), or a React fragment type. >

# What are the three properties that createElement accept?
< Type : The type you have passed.
Props : The props you have passed except for ref and key . ...
Ref : The ref you have passed. ...
Key : The key you have passed, coerced to a string.>

# What is the meaning of render and root?
< React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app. >