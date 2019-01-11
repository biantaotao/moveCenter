var Script = function () {
    $.validator.setDefaults({
        submitHandler: function() {
           console.log("submitted!");
        }
    });

    $().ready(function() {
        // validate signup form on keyup and submit
        $("#form-validate").validate({
            rules: {
                fullname: {
                    required: true,
                    minlength: 6
                },
                address: {
                    required: true,
                    minlength: 10
                },
                notnull:{
                    required: true
                },
                username: {
                    required: true
                },
                job:{
                    required: true
                },
                phone:{
                    required: true
                },
                mobilephone:{
                    required:true,
                    minlength: 11
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                mainrepaircontent:{
                    required: true
                },
                agree: "required"
            },
            messages: {
                fullname: {
                    required: "Please enter a Full Name.",
                    minlength: "Your Full Name must consist of at least 6 characters long."
                },
                address: {
                    required: "Please enter a Address.",
                    minlength: "Your Address must consist of at least 10 characters long."
                },
                username: {
                    required: "这是必填字段"
                },
                job:{
                    required: "这是必填字段"
                },
                mobilephone:{
                    required: "这是必填字段",
                    minlength: "不能少于11个字段"
                },
                phone:{
                    required: "这是必填字段"
                },
                notnull:{
                    required: "这是必填字段"
                },
                password: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 5 characters long."
                },
                confirm_password: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 5 characters long.",
                    equalTo: "Please enter the same password as above."
                },
                email: {
                    required: "这是必填字段",
                    email:"请输入有效的电子邮件地址"
                },
                mainrepaircontent:{
                    required: "这是必填字段",
                },
                agree: "Please accept our terms & condition."
            }
        });

        $("#form-validate1").validate({
            rules: {
                money: {
                    required: true,
                },
                qiantime:{
                    required: true
                },
                outtime:{
                    required: true
                },
                intime:{
                    required: true
                }
            },
            messages: {
                money: {
                    required: "这是必填字段",
                },
                qiantime: {
                    required: "这是必填字段",
                },
                outtime:{
                    required: "这是必填字段",
                },
                intime:{
                    required: "这是必填字段",
                },
            }
        });
    });
}();