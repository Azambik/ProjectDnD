# How to standup the application

## Required Software

### Node
    
        https://nodejs.org/dist/latest-v12.x/   
        
        1. If using .msi installer, install then skip to the end and verify.
        
        2. If using binaries, extract files somewhere
        
        3. If Open/Edit Environment Variables
        
            Linux:
            
                1. if node exists, remove `sudo rm /usr/bin/node`
                
                2. Set soft link `sudo ln -s <path to bin/node> /usr/bin/node`
                
                3. if npm exists, remove `sudo rm /usr/bin/npm`
                
                4. Set soft link `sudo ln -s <path to bin/npm> /usr/bin/java`
                
            Windows:
            
                1. open Environment Variables program
                
                2. In System Variables, edit path
                
                3. If a node and npm path exists, remove them
                
                4. Add a new path that points to the new node bin directory (npm is inside the node bin)
                
        Verify installation by executing `npm --version` in terminal
        
### Angular
    
        1. Once node is installed, execute `npm i -g @angular/cli@11.0.3`
        
        Verify installation by executing `ng --version` in terminal
        
### Java 11
    
        https://download.java.net/openjdk/jdk11/ri/openjdk-11+28_windows-x64_bin.zip
        
        1. Extract files somewhere
        
        2. Open/Edit Environment Variables
        
            Linux:
            
                a1. if exists remove `sudo rm /usr/bin/java`
                
                a2. Set soft link `sudo ln -s <path to java/bin> /usr/bin/java`
                
            Windows:
            
                b1. open Environment Variables program
                
                b2. In System Variables, edit path
                
                b3. If a JDK path exists, remove this path
                
                b4. Add a new path that points to the new java bin directory 
                
        Verify installation by executing `java -version` in terminal
        
### Gradle 6.7.1
    
        https://gradle.org/next-steps/?version=6.7.1&format=bin
        
        1. Extract files somewhere
        
        2. Open/Edit Environment Variables
        
            Linux
            
                a1. if exists remove `sudo rm /usr/bin/gradle`
                
                a2. Set soft link `sudo ln -s <path to gradle/bin> /usr/bin/gradle`
                
            Windows:
            
                b1. open Environment Variables program
                
                b2. In System Variables, edit path
                
                b3. If a gradle path exists, remove this path
                
                b4. Add a new path that points to the new gradle bin directory
                
        Verify installation by executing `gradle --version`
        
### Visual Studio Code
    
        https://code.visualstudio.com/
        
        1. Download and Install
        
        2. Open and Navigate to extensions
        
        3. Install the following extensions
        
            1. Spring Boot Extension Pack
            
            2. TSLint
            
            3. HTML CSS Support
            
            4. Java Extension Pack
            
            5. Gradle Tasks
            
### pgAdmin (Postgresql Admin)
    
        https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v4.29/windows/pgadmin4-4.29-x64.exe
        
        1. Download and Install

## Installing the ui node packages

    1. Navigate to `<project root>/ui` in terminal
    
    2. Execute `npm i` in terminal
    

## Setting the database password

    1. Open `projectdnd` root folder (where the README.md lives)
    
    2. Open `src/main/resources/application.properties`
    
    3. Fill in database password here: `spring.datasource.password=`
    

## Building and Running the Application

    Backend:
    
        1. Open `projectdnd` root folder (where the README.md lives) inside visual studio code
        
        2. Click on the Elephant on the left in Visual Studio Code (gradle).
        
        3. Expand `build`, click `build` in the list, then click `Play`
        
        4. Expand `SPRING BOOT DASHBOARD` click `Play` (look at the debug console)
        
        5. Click `Stop` button to shutdown the backend
        

    Frontend:
    
        1. Open terminal
        
        2. Navigate inside the `ui` folder
        
        3. Execute `ng build` (`ng build --prod` for production build)
        
        4. Execute `ng serve` to serve the application at `localhost:4200`.
        
        5. `Ctrl + C` in terminal to shutdown the front-end.


## Visit http://localhost:4200 
