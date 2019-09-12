// var on =document.getElementById('one');
// on.addEventListener('click',oner);
function num(x)
{
    
    document.form.textview.value=document.form.textview.value+x;
    // alert('One is pressed');
}
function enter()
{
    var ev=document.form.textview.value;
    if(ev)
    {
        document.form.textview.value=eval(ev);
    }
}
function clearnum()
{
    document.form.textview.value="";
}