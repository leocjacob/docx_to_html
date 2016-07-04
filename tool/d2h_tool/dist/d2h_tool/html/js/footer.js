/**
 * To add copyright,version,build number in footer for help module
 */
$(document).ready(function(){
         jQuery.getJSON("/api/system/build/info", function(data){
                $("#copyright").append("Copyright UMS 2012");
                $("#version").append("Version:"+data.version+" Build:"+ data.build+" Revision:"+ data.gitRevision);
                $("#product").append("Product from: <b>UMS AS</b>");
            });
});