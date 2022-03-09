// Get all the images
image_array = [
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png',
  '24.png',
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  '33.png',
  '34.png',
  '35.png',
  '36.png',
  '37.png',
  '38.png',
  '39.png',
  '40.png',
  '41.png',
  '42.png',
  '43.png',
  '44.png',
  '45.png',
  '46.png',
  '47.png',
  '48.png',
  '49.png',
  '50.png'
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}
