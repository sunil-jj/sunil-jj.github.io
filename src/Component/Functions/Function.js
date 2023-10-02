

// https://drive.google.com/file/d/1ses2VtkMl_8bzwViHhgXZi7P7fcfykTE/view?usp=sharing        this is direct google drive link 


// https://drive.google.com/uc?export=download&id=1ses2VtkMl_8bzwViHhgXZi7P7fcfykTE            this is download link from google drive

// https://1drv.ms/b/s!AplsJENjsBMsuyIbNXSDf0yM1etL?e=6ycju3    one drive link of my resume
// https://onedrive.live.com/download?resid=2C13B06343246C99%217586&authkey=!ALABLA  one drive direct download link

export const downloadResume=()=>{
    window.open("https://drive.google.com/file/d/114qk1QktrJHHvU7F586MsApyBhyNykJ8/view?usp=sharing","_blank")
    const fileURL = "https://onedrive.live.com/download?resid=2C13B06343246C99%217586&authkey=!ALABLA";
            
         
            let alink = document.createElement('a');
            alink.href = fileURL;
           
            alink.click();
}
 