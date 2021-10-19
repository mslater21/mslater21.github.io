function onMouseMove(e) {
    let mouse_output = d3.select("#mouse_position")
    mouse_output.text("Mouse X: " + e.clientX + ", Y: " + e.clientY)
}

function onMouseEnter(e) {
    let icon = e.target.id
    d3.select('#' + icon).attr("opacity", .5);
    d3.select('#in_icon').text("In: " + icon);
}

function onMouseLeave(e) {
    let icon = e.target.id
    d3.select('#' + icon).attr("opacity", 1).attr("class", "icon");
    d3.select('#' + icon + '_img').attr("class", "icon");
    d3.select('#out_icon').text("Out: " + icon);
}

function onDoubleClick(e) {
    let icon = e.target.href.baseVal.split('/')[1].split('.')[0]
    let url = "https://www." + icon + ".com";
    window.open(url)
}

function onMouseDown(e) {
    console.log('click')
    let icon = e.target.id
    console.log(icon)
    let svg = d3.select("#" + icon.split('_')[0]).attr("class", "small_icon")
    console.log(svg)
    d3.select('#' + icon).attr("class", "small_icon")
}

function onMouseUp(e) {
    console.log('Unclick')
    let icon = e.target.id
    let svg = d3.select("#" + icon.split('_')[0]).attr("class", "icon");
    d3.select('#' + icon).attr("class", "icon");
}

function init() {

    let icons = d3.select("body").append("span")

    let icon_twitter = icons.append("svg")
        .attr("class", "icon")
        .attr("id", "Twitter")
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave)
        .on("dblclick", onDoubleClick)
        .on("mouseup", onMouseUp)
        .on("mousedown", onMouseDown)
        .append("image")
        .attr("id", "Twitter_img")
        .attr("class", "icon")
        .attr("xlink:href", "images/twitter.png")

    let icon_fb = icons.append("svg")
        .attr("class", "icon")
        .attr("id", "Facebook")
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave)
        .on("dblclick", onDoubleClick)
        .on("mouseup", onMouseUp)
        .on("mousedown", onMouseDown)
        .append("image")
        .attr("id", "Facebook_img")
        .attr("class", "icon")
        .attr("xlink:href", "images/facebook.png")

    let icon_reddit = icons.append("svg")
        .attr("class", "icon")
        .attr("id", "Reddit")
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave)
        .on("dblclick", onDoubleClick)
        .on("mouseup", onMouseUp)
        .on("mousedown", onMouseDown)
        .append("image")
        .attr("id", "Reddit_img")
        .attr("xlink:href", "images/reddit.png")
        .attr("class", "icon")

    let icon_linkedin = icons.append("svg")
        .attr("class", "icon")
        .attr("id", "LinkedIn")
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave)
        .on("dblclick", onDoubleClick)
        .on("mouseup", onMouseUp)
        .on("mousedown", onMouseDown)
        .append("image")
        .attr("id", "LinkedIn_img")
        .attr("xlink:href", "images/linkedin.png")
        .attr("class", "icon")

    let icon_insta = icons.append("svg")
        .attr("class", "icon")
        .attr("id", "Instagram")
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave)
        .on("dblclick", onDoubleClick)
        .on("mouseup", onMouseUp)
        .on("mousedown", onMouseDown)
        .append("image")
        .attr("id", "Instagram_img")
        .attr("xlink:href", "images/instagram.png")
        .attr("class", "icon")

    let text_div = d3.select("body").append("div")
    let in_icon_field = text_div.append("div")
        .attr("id", "in_icon")
        .text("In:")
    text_div.append("br")
    let out_icon_field = text_div.append("div")
        .attr("id", "out_icon")
        .text("Out:")
    text_div.append("br")
    let mouse_pos_field = text_div.append("div")
        .attr("id", "mouse_position")
        .text("Mouse X: , Y: ")

    icons.on("mousemove", onMouseMove)
};
