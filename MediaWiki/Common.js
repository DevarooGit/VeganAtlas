/* Any JavaScript here will be loaded for all users on every page load. */

/* Bootstrap tabs: Remove active classes when clicking on new nav-link */
$(".nav-tabs .nav-link").click(function() {
    $(".nav-tabs .nav-link").removeClass('active');
 });
 
 // Create page form: open on new window; set for Atlas:Guides/Publishing
 $(function(){
   $('form.pfFormInput').attr('target', '_blank');
 });
 
 /* Add heading before references */
 $(document).ready(function(){
     $('.mw-references-wrap').before('<h3 class="mt-5">References</h3>');
 });