const addRecommendation = () => {
  // Get the message of the new recommendation
  const newRecommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (
    newRecommendation.value !== null &&
    newRecommendation.value.trim() !== ""
  ) {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    const recommendationContainer = document.createElement("div");
    recommendationContainer.setAttribute("class", "recommendation");
    recommendationContainer.innerHTML =
      "<span>&#8220;</span>" + newRecommendation.value + "<span>&#8221;</span>";
    // Add this element to the end of the list of recommendations
    document
      .getElementById("all_recommendations")
      .appendChild(recommendationContainer);

    // Reset the value of the textarea
    newRecommendation.value = "";
  }
};

const showPopup = (bool) => {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
};
