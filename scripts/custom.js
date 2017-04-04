
$(document).ready(function() {

  //TABS
  //When page loads...
  $(".tabsContent").hide(); //Hide all content
  $("ul.liveTabs li:first").addClass("active").show(); //Activate first tab
  $(".tabsContent:first").show(); //Show first tab content

  //On Click Event
  $("ul.liveTabs li").click(function() {
    $("ul.liveTabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tabsContent").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    return false;
  });
  
  //OPTIONAL: For underlined tabs navigation
  //When page loads...
  $(".tabContent").hide(); //Hide all content
  $("ul.tabs li:first").addClass("active").show(); //Activate first tab
  $(".tabContent:first").show(); //Show first tab content
  //On Click Event

  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tabContent").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    return false;
  });
});

