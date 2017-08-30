const express = require('express');
const fs = require('fs');

const app = express();

const menuHtml = "<!DOCTYPE html><html lang='vi'><head><meta charset='utf-8'><meta viewport='width:device-width;initial-scale:1;'><meta description='McGangbang'><title>Menu Site </title><link rel='stylesheet' type='text/css' href='style.css'></head><body><nav class='horizontalMenu'><a class='menuList' href='/home'>Home</a><a class='menuList' href='/about'>About</a><a class='menuList' href='/readfiletool'>Read File Engine</a></nav></body>"

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/menu.html");
});

app.get("/home", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/public/profile.html");
});

app.get("/readfiletool", (req, res) => {
	var filevalue = fs.readFileSync(__dirname + "/public/test.txt","utf-8");
	var html = menuHtml + filevalue + "</html>";
  	res.send(html);
});

app.use(express.static(__dirname + "/public"));

app.listen(6969, () => {
	console.log("server is up");
});