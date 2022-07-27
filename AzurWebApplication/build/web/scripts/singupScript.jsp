<%-- 
    Document   : singupscript
    Created on : 2 jun. 2022, 19:45:47
    Author     : Erick
--%>

<%@page import="azurClasses.Customer"%>
<%@page import="dbManage.DBManager"%>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Portal AZUR</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
<%
    try{
        DBManager db=new DBManager("AZUR","users");
        String _ci=new String((request.getParameter("ci")).getBytes("ISO-8859-1"),"UTF-8");
        String _name=new String((request.getParameter("name")).getBytes("ISO-8859-1"),"UTF-8");
        int _age=Integer.valueOf(request.getParameter("age"));
        String _address=new String((request.getParameter("address")).getBytes("ISO-8859-1"),"UTF-8");
        String _cellphone=new String((request.getParameter("cellphone")).getBytes("ISO-8859-1"),"UTF-8");
        String _email=new String((request.getParameter("emailSing")).getBytes("ISO-8859-1"),"UTF-8");
        String _pass=new String((request.getParameter("passwordSing")).getBytes("ISO-8859-1"),"UTF-8");
        Customer customer=new Customer(_ci,_name,_age,_address,_cellphone,_email,_pass);
        db.insertRegister(customer);
        response.sendRedirect("../login.jsp");
    }catch(Exception e){
        out.print("Llena todos los campos");
    }
%>        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
</html>

