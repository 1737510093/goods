	
		$(function(){
			//登录验证
			const user = /^.{6,20}$/,
		      password = /^.{6,18}$/;
		      //判断手机号
			$("#login_phone").blur(function(){
				const username = $("#login_phone").val();
				if(user.test(username)===false){
					$("#login_info").text("-用户名为6-20位字符");
					$("#login_info").removeClass("info_success");
					$("#login_info").addClass("info_error")
					$("#login_phone").focus();
				}
				else{
					$("#login_info").text("-格式正确");
					$("#login_info").removeClass("info_error");
					$("#login_info").addClass("info_success");
				}
			})
			//判断密码
			$("#login_pwd").blur(function(){
				const pwd = $("#login_pwd").val();
				if(password.test(pwd)===false){
					$("#password_info").text("-密码格式错误");
					$("#password_info").removeClass("info_success");
					$("#password_info").addClass("info_error")
					$("#login_pwd").focus();
				}
				else{
					$("#password_info").text("-格式正确");
					$("#password_info").removeClass("info_error");
					$("#password_info").addClass("info_success");
				}
			})
		
		})
			

	

