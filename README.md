# Web Development Course Assignments

Welcome to the Web Development Course! This repository contains practice sheets and assignments to help you master HTML, CSS, and JavaScript.

## Getting Started

### Prerequisites

To get started, you will need:
- A GitHub account. [Sign up here](https://github.com/) if you don't have one.
- Git installed on your local machine. [Download and install Git](https://git-scm.com/).

### Forking the Repository

1. Navigate to the main repository on GitHub.
2. Click on the "Fork" button at the top right corner of the repository page. This will create a copy of the repository in your GitHub account.

### Cloning the Repository

1. Go to your forked repository.
2. Click on the green "Code" button and copy the HTTPS URL.
3. Open your terminal or Git Bash and run the following command to clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```
    Replace `<repository-url>` with the URL you copied.

### Creating a New Branch

1. Navigate into the cloned repository directory:
    ```bash
    cd <repository-name>
    ```
    Replace `<repository-name>` with the name of your repository.
2. Create and switch to a new branch for your assignment:
    ```bash
    git checkout -b <your-branch-name>
    ```
    Replace `<your-branch-name>` with a descriptive name for your branch.

### Adding Your Assignment

1. Inside the cloned repository folder on your local machine, create a new folder named `Assignment_<number>`.
2. Add your HTML, CSS, and JS files to this folder.

### Committing Your Changes

1. Add your files to the staging area:
    ```bash
    git add .
    ```
2. Commit your changes with a descriptive message:
    ```bash
    git commit -m "Add Assignment <number> files"
    ```
    Replace `<number>` with the assignment number.

### Pushing Your Changes to GitHub

1. Push your new branch to your forked repository on GitHub:
    ```bash
    git push origin <your-branch-name>
    ```

### Creating a Pull Request

1. Go to your forked repository on GitHub.
2. Click on the "Compare & pull request" button.
3. Write a brief description of the changes you made and submit the pull request.

### Example Commands

Here is an example of how the commands would look like:
```bash
# Clone the repository
git clone https://github.com/your-username/repository-name.git

# Navigate into the repository
cd repository-name

# Create a new branch
git checkout -b assignment-1

# Add your files (assuming you created and added them already)
git add .

# Commit your changes
git commit -m "Add Assignment 1 files"

# Push your branch to GitHub
git push origin assignment-1
