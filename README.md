# Gifted Children Learning

#### Introduction

2019 HUST Software Engineering Course Design

The Third Project

A Web for Genius to Study Mathematics

10.05 update

How use an api?

You can find the code in ChildrenStudy/Java Resources/Src/org.Dao

GetProblem:

    ArrayList<String> Query(int grade) 
        this function will return randomly with 30 problems in given grade
        each problem is a String and this function will return them in a array

Judge:

    boolean Query(String problem,int answer)
        this function will check the given answer with correct answer of given problem
        if given answer is correct, it will return true.Else it will return false.

Register:

    boolean new_user_register(String id, String password,int grade)
        this function needs user's id, password and grade.
        if there is no repetitive user id ,it will return true.

UserLogin:

    boolean Login(String id, String password)
        this function will match id with password
        if they are matched ,it will return true.

A simple login web will be found in ChildrenStudy/WebContent/check.jsp|index.jsp

You can find how to use database function and achieve some simple things.