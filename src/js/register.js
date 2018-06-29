//注册
const phone = /^[1][3,4,5,7,8][0-9]{9}$/,
      password = /^.{6,18}$/,
      email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      ps =/^[0-9A-Za-z]{6,18}$/,
      pm =/^(?=.{6,18})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$/,
      pl=/^(?=.{6,18})([0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*){2,}$/;
    //手机注册
    //判断手机号
	$("#phone").blur(function(){
		const pho = $("#phone").val();
		if(phone.test(pho)===false){
			$("#phone_info").text("-手机号码不是一个有效号码");
			$("#phone_info").removeClass("phone_info_success");
			$("#phone_info").addClass("phone_info_error")
			$("#phone").focus();
		}
		else{
			$("#phone_info").text("-手机号码可以使用");
			$("#phone_info").removeClass("phone_info_error");
			$("#phone_info").addClass("phone_info_success");
		}
	})
	//判断密码
	$("#pwd").blur(function(){
		const mima = $("#pwd").val();
		if(password.test(mima)===false){
			$("#difficulty").css("display","none");
			$("#pwd_info").css("display","block");
			$("#pwd_info").text("-登录密码为6-18位字符");
			$("#pwd").focus();
		}
		else {
			$("#difficulty").css("display","block");
			$("#pwd_info").css("display","none");
			if(pl.test(mima)===true){
				$("#s").addClass("s");
				$("#m").addClass("m");
				$("#l").addClass("l");
			}
			else if(pm.test(mima)===true){
				$("#s").addClass("s");
				$("#m").addClass("m");
			}
			else{
				$("#s").addClass("s");
			}
		}
	})
	//判断第二次输入密码
	$("#Cpwd").blur(function(){
		const mima = $("#pwd").val();
		const repwd = $("#Cpwd").val();
		if(repwd!==mima){
			$("#pwd_Cpwd").text("密码输入不一致！");
			$("#pwd_Cpwd").removeClass("info_success");
			$("#pwd_Cpwd").addClass("info_error")
		}
		else{
			$("#pwd_Cpwd").text("密码输入一致！");
			$("#pwd_Cpwd").removeClass("info_error");
			$("#pwd_Cpwd").addClass("info_success");
		}
	})
//点击邮箱注册
$("#email_register").click(function(){
	$("#phone").css("display","none");
	$("#print").css("display","none");
	$("#code").css("display","none");
	$("#email").css("display","block");
	$("#yan_email").css("display","block");
	$("#email_code").css("display","block");
	$("#email_register").removeClass("email_register");
	$("#email_register").addClass("phone_register");
	$("#phone_register").removeClass("phone_register");
	$("#phone_register").addClass("email_register");
})
$("#phone_register").click(function(){
	location.reload();
})
//验证邮箱
$("#email").blur(function(){
	const _email = $("#email").val();
	if(email.test(_email)===false){
		$("#phone_info").text("-邮箱格式有误");
			$("#phone_info").removeClass("phone_info_success");
			$("#phone_info").addClass("phone_info_error")
			$("#email").focus();
	}
	else{
		$("#phone_info").text("-邮箱可以使用");
			$("#phone_info").removeClass("phone_info_error");
			$("#phone_info").addClass("phone_info_success");
	}
})
