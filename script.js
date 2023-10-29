

let nav_headings = document.getElementsByClassName('nav_headings');
let arr = Array.from(nav_headings);


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

let project_class = document.getElementsByClassName('project');
let project_class_arr = Array.from(project_class)

project_class_arr.forEach((el)=>{
    el.addEventListener('click', function(){
        show_popup(el);
    });
})

let popup_panel = document.getElementById('popup');

function show_popup(project){
    popup_panel.style.transform = 'translateX(0%)';
}

function hide_popup(){
    popup_panel.style.transform = 'translateX(100%)'
}







// let v_container = document.getElementById('visible-container');

// arrange_slides(v_container);

// function arrange_slides(visible_contanier){
//     let children = Array.from(visible_contanier.children);
//     let start_translate = 0;

//     children.forEach((el)=>{
//         let left_s = children.indexOf(el)*100
//         el.style.left = `${left_s}%`
//         print(el.style.left);
//     })

// }
// let counter = 0;



// function slide_left(){

//     let img_count = Array.from(v_container.children).length
//     console.log(Math.abs(counter));
//     console.log(Math.abs(img_count));

//     if (Math.abs(counter)<Math.abs(img_count)-1){
//         counter--;
//         Array.from(v_container.children).forEach((el)=>{
//             el.style.transform = `translateX(${counter*100}%)`
            
            
//         })
    
// }
// }

// function slide_right(){


//     let img_count = Array.from(v_container.children).length
//     console.log(Math.abs(counter));
//     console.log(Math.abs(img_count));

//     if (Math.abs(counter)>0){
//         counter++;
//         Array.from(v_container.children).forEach((el)=>{
//             el.style.transform = `translateX(${counter*100}%)`;
        
//         })
//     }
// }

// const setPopupHeight =() =>{
//     let hei = document.documentElement.scrollHeight;

//     let popup = document.getElementById('popup');

//     popup.style.height = `${hei}px`;
// }

// // setPopupHeight()

