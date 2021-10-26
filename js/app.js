var pages=["HOME", "ABOUT", "VIEW"];
var list=[];
function create_nav(){
    document.body.innerHTML=""
    var nav=document.createElement("nav")
    create_button(pages[0]);
    create_button(pages[1]);
    create_button(pages[2]);
    nav.style.backgroundColor="red";
    nav.style.lineHeight="60px";
    nav.style.height="60px";
    nav.style.display="flex";
    nav.style.justifyContent="center";
    nav.style.alignItems="center";

    document.body.appendChild(nav);

    function create_button(pg){
        var button=document.createElement("button")
        button.style.height="20px"
        button.innerHTML=pg;
        button.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(button);
    }
}
function create_wrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}
function navigate(pg){
    if(pg==="HOME"){
        home_page()
    }else if(pg==="ABOUT"){
        about_page()
    }else if(pg==="VIEW"){
        view_page()
    }else {
        login()
    }
}
function login(){
    var user=document.createElement("input");
    user.classList.add("user");
    user.placeholder="username";
    var submit=document.createElement("button")
    submit.classList.add("submit")
    submit.innerHTML="Submit"
    var answer=document.createElement("div")
    submit.addEventListener("click", function (){
        var username=document.body.querySelector(".user").value;
        if (username==="coolStudent123"){
            create_nav()
            create_wrapper()
            navigate("HOME")
        }else{
            answer.innerHTML="The username input is incorrect."
        }
    })
    document.body.appendChild(user);
    document.body.appendChild(submit);
    document.body.appendChild(answer);
}
function home_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="Home";
    wrapper.appendChild(header);
}
function about_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="About";
    var name=document.createElement("h3")
    name.innerHTML="Damon"
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}
function view_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="View Notes";
    var single_note=document.createElement("input");
    single_note.classList.add("one_note");
    single_note.placeholder="Note";
    var importance=document.createElement("input");
    importance.classList.add("import");
    importance.placeholder="Importance";
    var note=document.createElement("button")
    note.classList.add("note")
    note.innerHTML="Submit Note"
    var note_list=document.createElement("div")
    note_list.classList.add("note_list")
    note.addEventListener("click", function (){
        var note = document.body.querySelector(".one_note").value;
        var importance = document.body.querySelector(".import").value;
        if (Number.isNaN(importance)){
            note_list.innerHTML="Importance must be listed as a number"
        }else {
            list.push(`${importance} ${note}`);
            render_list()
        }
        function render_list(){
            note_list.innerHTML=""
             for (var i=0; i<list.length; i++){
                 var note=document.createElement("div")
                 note.innerHTML=list[i];
                 note_list.appendChild(note)
             }
        }
    })
    wrapper.appendChild(header);
    wrapper.appendChild(single_note);
    wrapper.appendChild(importance);
    wrapper.appendChild(note);
    wrapper.appendChild(note_list);
}

navigate("...")