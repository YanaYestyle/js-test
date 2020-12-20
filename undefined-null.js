<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>Undefined and null are equal in value but different in type:</p>

<p id="demo"></p>

<script>
var car;
var dog = null;

document.getElementById("demo").innerHTML = 
dog + "<br>" + // Here is null, but WITHOUT ANY STRINGS is totally EMPTY
car + "<br>" + // undefined
"Car is " + car + "<br>" + // Car is undefined
"Car's type is " + typeof car + "<br>" + // Car's type is undefined
"Dog is " + dog + "<br>" + // Dog is null
"Dog's type is " + typeof dog + "<br>" + // Dog's type is object
"car == dog is " + (car == dog) + "<br>" + // car == dog is true
"car === dog is " + (car === dog); // car === dog is false
</script>

</body>
</html>
