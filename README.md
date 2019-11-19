# 儿童学习

## 简介

2019 华中科技大学 软件工程课程设计

小组成员： 
   
    组长 张淇 U201714466 计卓1701
    组员 胡玉姝 U201714490 计卓1701
    

儿童学习网站

具体网站可以访问: http://childrenstudy.cf:8888

代码仓库位于: https://gitee.com/copyrightpoi/Gifted-Children-Learning

具体代码目录详见
    
> Children Study
> > src
> > > org.Dao 数据库逻辑 java源代码
> >
> > >servlet ajax逻辑 java源代码
> >
>
> > web
> > > css css源代码
> >
> > > js javascript源代码
> >
> > > pages 网页源码
> > 
> > > pics 图片资源


***

##更新记录

###10.05 update

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