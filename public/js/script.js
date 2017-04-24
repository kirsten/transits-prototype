$(document).ready(function() {
  $('.menu-prompt').click(function() {
    $(this).siblings('.menu').toggleClass('hidden');
  });

  $('.menu li').click(function() {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $(this).closest('.menu').addClass('hidden');
    $(this).closest('.menu').siblings('.menu-prompt').removeClass('placeholder').text($(this).text());

    if (allSelectionsMade()) {
      var meaning = selectRandomMeaning();
      $('.meaning-container h3').text(meaning.title);
      $('.meaning-container p').text(meaning.description);
    }
  });
});

function allSelectionsMade() {
  var aspect = $("#aspect-menu li.selected");
  var transit = $("#transit-menu li.selected");
  var natal = $("#natal-menu li.selected");

  return aspect.length > 0 && transit.length > 0 && natal.length > 0;
}

function selectRandomMeaning() {
  var index = Math.floor(Math.random() * meanings.length);
  return meanings[index];
}

var meanings = [
  {
    title: "Sun conjunct Sun",
    description: "It's time to celebrate as a new solar cycle begins. Pay close attention to your overall mood as well as to any insights you have now. Concentrate on what you want from your life, and where you want your life to head. How you handle today impacts the kind of year you have ahead of you. This is the actual date and time of your Solar Return. You may wish to do something special at this hour, such as a meditation ritual. The steps you take today determine your path for the next year. This is the beginning of a new year for you, and you feel charged with new energy, vitality, and sense of purpose. Make this day an excellent one, as the energies you feel today can be somewhat of a 'stamp' for the year ahead."
  },

  {
    title: "Moon square Sun",
    description: "You may become aware of a conflict between what you want and what you need. Even if you are not aware of this inner imbalance, it could cause some tensions or feelings of being unsupported by others or by circumstances in your life. This can cause you to be provocative with others, or it can spur you into finding answers to problems-the choice is yours! You may feel slightly out of step or out of synch, which could make you edgy. There could be a noticeable discrepancy between the demands of your personal life and what is expected of you at work. Minor problems in relationships are more likely during this transit. Arriving at decisions is harder now because you feel torn between choices. If this transit occurs during the night, you could have a restless sleep. Examining bad dreams can help you understand what is bothering you. Use the dynamic energy of this transit to identify problems in order to find solutions to them, instead of harping on what is going wrong in your life or taking it out on others."
  },

  {
    title: "Mercury conjunct Mars",
    description: "This is a time of quick wit and strong mental impulses. You are especially enthusiastic and productive. You are more inclined than usual to express your desires, and perhaps what gets your goat as well! Your observations are sharp, but you could be inclined towards mental pressures or impatience with others who don't seem to be getting your point right away. This is a time when plans are put into action."
  },

  {
    title: "Sun trine Jupiter",
    description: "This influence represents growth and expansiveness. You are more aware of moral issues, and have a desire to improve and learn. Optimism and confidence are basic elements in the energy of this transit. You are more willing to take a risk or two, and you are motivated by a desire to impress others. Enthusiasm runs high, and cooperation comes easily. This is generally a good time to schedule new beginnings in business, education, personal relationships, marriage, creative projects, and so forth, all things equal. Sincerity and honesty works best for you now. This could be a period in which you realize a long-term goal. Your enthusiasm is boundless, and you are inclined to take the high road in your dealings with others. Health and vitality are strong. An opportunity to take a trip or to embark on an adventure, however big or small, could arise now."
  },

  {
    title: "Venus opposing Ascendant",
    description: "If there are problems now, employing tact and diplomacy can help offset them. You are more sensitive than usual to subtleties in your personal environment, and all the more vulnerable as a result. The choices you make now are colored by this sensitivity, as well as a stronger than usual need for approval and harmony. Relationship opportunities, generally of a more serious nature, sometimes arise during this transit."
  },

  {
    title: "Mars sextile Neptune",
    description: "Your intuition, compassion, and idealistic impulses are pleasantly stimulated now. Practical concerns and routines are of little interest to you, so it's a good time to take in a movie, create something artistic, enjoy down time, and other such creative and entertaining endeavors. You may be feeling pleasantly inspired. There can be letting go of anger, or a softening of the disposition now."
  }
];

