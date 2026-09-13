class Utilities {
  cosec(num: number): number {
    return 1 / Math.sin(num);
  }

  sec(num: number): number {
    return 1 / Math.cos(num);
  }

  radians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  degrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}

export default Utilities;
