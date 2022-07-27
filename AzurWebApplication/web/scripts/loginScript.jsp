<%-- 
    Document   : loginScript
    Created on : 2 jun. 2022, 19:47:07
    Author     : Erick
--%>
<%@page import="dbManage.DBManager"%>
<%
    try{
        DBManager db=new DBManager("AZUR","users");
        String _email=new String((request.getParameter("emailLogin")).getBytes("ISO-8859-1"),"UTF-8");
        String _pass=new String((request.getParameter("passwordLogin")).getBytes("ISO-8859-1"),"UTF-8");
        if(db.validLogin(_email, _pass)){
            response.sendRedirect("../makeAppointment.jsp");
        }else{
        
        }
    }catch(Exception e){
        out.print("Llena todos los campos");
    }
    
    
    
%>
