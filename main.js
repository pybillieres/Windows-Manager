document.addEventListener('DOMContentLoaded', function(){
var manager = new WindowsManager(["terminal", "about_me"]);
var terminal = new Windows("terminal_title", "terminal");
var AboutMe = new Windows("about_me_title", "about_me");
});