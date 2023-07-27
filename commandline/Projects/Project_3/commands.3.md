What command would you use to clear the screen : 
clear   command to clear the screen.

What is the shortcut command to open a new tab in your terminal: 
VSC -> Ctrl + Shift + backtick(`) and window Ctrl +n.

What key would you use to scroll through previous commands you've typed before : 
Up Arrow - pressiong show the previous command history. 

You have three txt files and an empty folder on your desktop. Write a single line command that will move all three txt files into the folder: 
mv command to move files and with (*) wildcard to move all three text files: mv ~/Desktop*.txt ~/Desktop/emptyFolderName/

You want to inspect the difference between two txt files myfile1.txt and myfile2.txt. Write a command that would display the differences in content between these two files. 
Use diff command will compare the content of the two file -> diff file1.tx file2.txt

Write command that would delete this folder and all of the contents inside:
rm -rf command will delete folder with inside contents permanently. (force remove command)/

What is the command to list all files, including hidden files? Write command that displays all .css files in a folder:
ls : list all regular folder / files ,  ls -al : list all files with hidden files 
and to see .css extension file use: ls *.css,  we can see all css extension files. 

What is the command to find a file by name on your disk ( or some other storage medium)
find command allows us to search files and directory based on various criteria, including file name: find /path/serch -name "filename".

What is the command to find a file by content -> in folder and  on the disk
use grep command:  find /path/folder -type f -exec grep -l "search_text" [] + .  [] as a placeholder to find the find command. 

Use a bash command to create a file named YourName.txt with no content in it. Look at the permissions.
a> Now change the permission so everyone can read it and execute it
b> Now change the permission so only you can read it

use change mode command: chmod -> 
touch YourName.txt      ->create a file and use ls -l to show the mode of the file, we can see (rw-r-r ) - like. 
chmod +rx YourName.txt  ->it will change the mode of the file's accessability (- rwxr -xr-x 1) - now every one can read and execute permissions for the flie.
chmod 400 YourName.txt   -> now only owner has read only persission.  

