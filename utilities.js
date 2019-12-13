class Utilities {
  cosec(num) {
    return 1 / Math.sin(num);
  }

  sec(num) {
    return 1 / Math.cos(num);
  }

  radians(degrees) {
    return degrees * (Math.PI / 180);
  }

  degrees(radians) {
    return radians * (180 / Math.PI);
  }

}

export default Utilities;
