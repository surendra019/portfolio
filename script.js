let anim= lottie.loadAnimation({
    container: document.getElementById('lottie_cont'),
    autoplay: true,
    renderer: 'svg',
    path: 'laptop_lottie.json',
    loop: true})


    let nav_headings = document.getElementsByClassName('nav_headings');
let arr = Array.from(nav_headings);
let svg_main = document.getElementById('svg_main');
let polyline = document.getElementById('polyline');
let line = document.getElementById('line');



let points = polyline.getAttribute("points");

// arr.forEach((element)=>{
//     let el_rect = element.getBoundingClientRect();
//     console.log(el_rect.y)
    
//     let new_points = points+=` ${el_rect.x-10}, ${el_rect.y+el_rect.height}`
    
//     console.log(new_points);
//     polyline.setAttribute(`points`, new_points);

//     })
// let p = points+=" 30, 100000";
// polyline.setAttribute("points", p);




my_job = document.getElementById('myjob');

const animate_jobs = ()=>{

    let JOBS = ["Game developer", "Mobile app developer", "Web developer"];
    let idx = 0;
    
    
    
    var do_charbychar = function(){
        $("#myjob").codex({
            effect: "charbychar",
            keep_whitespaces: false, // sodomize also whitespaces
            speed: 50, // speed in which random chars will appear in letters not yet revelaed
            reveal: 100, // number of miliseconds that will take for a single char reveal
            // duration: 100
        });
      }
    
    let curr_job = JOBS[idx]; 
    let curr_job_arr = curr_job.split();
    
    let wait_time = 3000;
    
    
    
    setInterval(()=>{
        if(idx==(JOBS.length)){
            idx = 0
        }
    curr_job = JOBS[idx]; 
    curr_job_arr = curr_job.split();
    
    my_job.textContent = JOBS[idx]
    do_charbychar();
    idx+=1;
    
    },((curr_job_arr.length+1)*100)+wait_time)
    
    // console.log(curr_job_arr.length*100)+1000;
    
    
}

animate_jobs();


function setProjectsContainer(){
    
    let all_projects = document.getElementsByClassName('project');
    let all_descriptions = document.getElementsByClassName('description');
    let des_offset= 400;
    let des_offset_ver = 200;
    let img_offset = 50;

    let arr_all_descriptions = Array.from(all_descriptions);
    let arr_all_projects = Array.from(all_projects);

    arr_all_projects.forEach((element)=>{
        
        var rect = element.getBoundingClientRect();
        var curr_des = arr_all_descriptions[arr_all_projects.indexOf(element)]

        let w = rect.width;
        let h = rect.height;
        // console.log(h)
        
        if(w<h){
            element.children[0].style.width= `${180}px`;
            element.children[0].style.height= `${400}px`;
            if(arr_all_projects.indexOf(element)%2!=1){
                element.style.left = `${-(rect.height+img_offset)}px`;
                curr_des.style.right = `${-(rect.height+des_offset)}px`;
                
                
            }else{
                element.style.left = `${(rect.height+img_offset)}px`;
                curr_des.style.left = `${-(rect.height+des_offset)}px`;
                   
            }
       
        }else{
            if(arr_all_projects.indexOf(element)%2!=1){
                element.style.left = `${-(rect.width+img_offset)}px`;
                curr_des.style.right = `${-(rect.width+des_offset)}px`;
               
            }else{
                element.style.left = `${rect.width+img_offset}px`;
                curr_des.style.left = `${-(des_offset)}px`;
                
            }
        }
        // console.log(element.children[0])
        

    })
}

setProjectsContainer();

// function setBackgroundText(){
//     let bg_texts_all = document.getElementsByClassName('background_text');
//     let arr_bg_texts_all = Array.from(bg_texts_all);


// }

function blurBg(){
    let body = document.getElementById('b');

    body.style.filter = "blur(2px)";
}
function unblurBG(){
    let body = document.getElementById('b');

    body.style.filter = "blur(0px)";
}