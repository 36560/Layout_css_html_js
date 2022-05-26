function settingsAnimationOver()
{
    var svgDoc = document.getElementById("settingsSvg").getSVGDocument()
    var circle1 = svgDoc.getElementById("circle1")
    var circle2 = svgDoc.getElementById("circle2")
    var all = svgDoc.getElementById("allSetting")
    circle1.style.transform = "translateX(30%)"
    circle2.style.transform = "translateX(-40%)"
    circle1.style.transition = "1s"
    circle2.style.transition = "1s"
    all.style.cursor = "pointer"
}
function settingsAnimationLeave()
{
    var svgDoc = document.getElementById("settingsSvg").getSVGDocument()
    var circle1 = svgDoc.getElementById("circle1")
    var circle2 = svgDoc.getElementById("circle2")
    circle1.style.transform = "translateX(0%)"
    circle2.style.transform= "translateX(0%)"
    circle1.style.transition = "1s"
    circle2.style.transition = "1s"

}              
function iconChartOver()
{
    var svgDoc = document.getElementById("chartSvg").getSVGDocument()
    var rect1 = svgDoc.getElementById("rect1")
    var rect2 = svgDoc.getElementById("rect2")
    var rect3 = svgDoc.getElementById("rect3")

    rect1.style.height = "25"
    rect1.style.y = "1"
    rect2.style.height = "15"
    rect2.style.y = "11"
    rect3.style.height = "10"
    rect3.style.y = "16"
}      
function iconChartLeave()
{
    var svgDoc = document.getElementById("chartSvg").getSVGDocument()
    var rect1 = svgDoc.getElementById("rect1")
    var rect2 = svgDoc.getElementById("rect2")
    var rect3 = svgDoc.getElementById("rect3")

    rect1.style.height = "10"
    rect1.style.y = "16"
    rect2.style.height = "25"
    rect2.style.y = "1"
    rect3.style.height = "15"
    rect3.style.y = "11"
}
function iconChartClick()
{
    var svgDoc = document.getElementById("chartSvg").getSVGDocument()
    var rect1 = svgDoc.getElementById("rect1")
    rect1.style.fill = "yellow"
}
function iconLogoutOver()
{
    var svgDoc = document.getElementById("logOutSvg").getSVGDocument()
    var path3 = svgDoc.getElementById("path3")
    var path5 = svgDoc.getElementById("path5")
    var path6 = svgDoc.getElementById("path6")
    var path2 = svgDoc.getElementById("path2")

    const logAnimation = [
    { transform: 'translateX(-10%)' },
    { transform: 'translateX(15%)' },
     {transform: 'translateX(0%)' }
    ];

    const logTiming = {
    duration: 600,
    iterations: 2,
    }
    
    path3.animate(logAnimation, logTiming);    
    path5.animate(logAnimation, logTiming);    
    path6.animate(logAnimation, logTiming);    
    path2.animate(logAnimation, logTiming);    
}
function notiOver()
{
    var svgDoc = document.getElementById("notiSvg").getSVGDocument()
    var circle = svgDoc.getElementById("path")
    var circle2 = svgDoc.getElementById("circle2")
    circle2.style.filter = "brightness(1.5)"

    const notiAnimation = [
    { transform: 'translateX(-10%)' },
    { transform: 'translateX(+10%)' },
    { transform: 'translateX(0%)' },
    { transform: 'translateX(-10%)' },
    { transform: 'translateX(0%)' }
    ];

    const notiTiming = {
    duration: 700,
    iterations: 1,
    }
    circle.animate(notiAnimation, notiTiming);         
}
function notiLeave()
{
    var svgDoc = document.getElementById("notiSvg").getSVGDocument()
    var circle2 = svgDoc.getElementById("circle2")
    circle2.style.filter = "brightness(1)"
}


/* STARS */
const starColor = 'yellow'
const stars = document.getElementsByClassName('star')

for (const star of stars) 
{
  star.addEventListener('mouseover', () => fillStar(star))
  var svg = document.getElementById("starSvg"+star.id);
  document.getElementById(star.id).addEventListener("click", function() 
  {
      checkStar(star)
  });
}

function fillStar(star)
{
    var svgDoc = document.getElementById('starSvg'+star.id).getSVGDocument()
    var path1 = svgDoc.getElementById("path1")

    const starAnimation = [
        {opacity: 40},
        { fill: starColor }
        ];
    
        const starTiming = {
        duration: 600,
        iterations: 1,
        }
    path1.animate(starAnimation, starTiming);  
}
function checkStar(star)
{
    var svgDoc = document.getElementById('starSvg'+star.id).getSVGDocument()
    var path1 = svgDoc.getElementById("path1")

    path1.style.fill == starColor ? path1.style.fill = 'none' : path1.style.fill = starColor
}
function uncheckedStar(star)
{
    var svgDoc = document.getElementById('starSvg'+star.id).getSVGDocument()
    var path1 = svgDoc.getElementById("path1")
    path1.style.fill = 'none'
}

/* CHART filter */
const chartFilters = document.getElementsByClassName('textChart')
for (const chartFilter of chartFilters) 
{
    chartFilter.addEventListener('click', () => enableFilter(chartFilter))
}

function enableFilter(chartFilter)
{
    var prevFilter = document.querySelector('.enableCh')
    prevFilter.classList.remove('enableCh')  
    chartFilter.classList.add('enableCh')
}

/* Dropdown FILTERS */
const optionFilter = document.querySelector('.options')
const timingFilter = document.querySelector('.optionsTiming')
const userOptions = document.querySelector('.optionsUser')
const options = optionFilter.children
const optionsH = timingFilter.children
const optionsUser = userOptions.children
const menuDuration = 300

for(const option of options)
{
    option.addEventListener('click', () => checkFilter(option))    
}
for(const option of optionsH)
{
    option.addEventListener('click', () => checkHourFilter(option))    
}
for(const option of optionsUser)
{
    option.addEventListener('click', () => checkUserFilter(option))    
}

function showMenu(nameClass)
{       
    const optionFilter = document.querySelector('.'+nameClass)

    if(optionFilter.classList.contains('hide'))
    {
        menuAnimationIn(nameClass)
        optionFilter.classList.remove('hide')
        optionFilter.classList.add('visible')
    }
    else
    {
        menuAnimationOut(nameClass)
        setTimeout(
            () => {
                optionFilter.classList.remove('visible')
                optionFilter.classList.add('hide')
            },
            menuDuration
          )
    }          
}
function menuAnimationIn(nameClass)
{
    const menu = document.querySelector('.'+nameClass)
    const menuAnimation = [
        {transform: 'translateY(-60px)'},  
        {transform: 'translateY(0px)'}       
        ];
    
        const menuTimig = {
        duration: menuDuration,
        iterations: 1,
        }
    menu.animate(menuAnimation, menuTimig);  
}
function menuAnimationOut(nameClass)
{
    const menu = document.querySelector('.'+nameClass)
    const menuAnimation = [        
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-60px)'}
        ];

        const menuTimig = {
        duration: menuDuration,
        iterations: 1,
        }
    menu.animate(menuAnimation, menuTimig);      
}
function checkFilter(option)
{
    const prevOption = document.querySelector('#selectedFilter').innerHTML
    const newOption = option.textContent
    document.querySelector('#selectedFilter').innerHTML = newOption
    option.textContent = prevOption

    if(newOption == 'Name')
        sortTable(0)    
    if(newOption == 'Top price')
        sortTable(1)    
    if(newOption == 'Top gainers')
        sortTable(2)    
}

function checkHourFilter(option)
{
    const prevOption = document.querySelector('#selectedTiming').innerHTML
    const newOption = option.textContent
    document.querySelector('#selectedTiming').innerHTML = newOption
    option.textContent = prevOption
}
function checkUserFilter(option)
{    
    const prevOption = document.querySelector('.infoName').innerHTML
    const newOption = option.textContent
    document.querySelector('.infoName').innerHTML = newOption
    option.textContent = prevOption
}

function tableAnimation()
{
    const tableAnimation = [
        {opacity: '0'},  
        {transform: 'translateY(0px)'},    
        {transform: 'translateY(+5px)'},   
        {transform: 'translateY(0px)'},
    ];
    
    const tableTiming = {
        duration: 600,
        iterations: 1,
    }
    table.animate(tableAnimation, tableTiming);  
}
function sortTable(n) 
{
    var table, rows, switching, i, x, y, shouldSwitch, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
       
    while (switching)
    {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) 
        {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            
            if(n==0)
            {
                x = x.querySelector('.textName1').innerHTML.toLowerCase()
                y = y.querySelector('.textName1').innerHTML.toLowerCase()
                if (x > y)
                {
                    shouldSwitch= true;
                    break;
                }    
            }
            if(n==1)
            {
                x = parseFloat(x.textContent.substring(1))
                y = parseFloat(y.textContent.substring(1))

                if (x < y)
                {
                    shouldSwitch= true;
                    break;
                }
            }
            if(n==2)
            { 
                x = parseFloat(x.textContent.substring(1,x.textContent.length-1))
                y = parseFloat(y.textContent.substring(1,y.textContent.length-1))
               
                if (x < y)
                {
                    shouldSwitch= true;
                    break;
                }    
            }
        }
        if (shouldSwitch)
        {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
        }     

        tableAnimation()   
    }
}

