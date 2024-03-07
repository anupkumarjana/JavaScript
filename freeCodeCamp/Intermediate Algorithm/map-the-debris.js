function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
   const calculateOrbitalPeriod = (avgAlt) => {
    const semiMajorAxis = earthRadius + avgAlt; // Semi-major axis
    const orbitalPeriodSeconds = Math.round(2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM));
    return orbitalPeriodSeconds;
  };

  // Transform the array elements into objects with orbital periods
  const transformedArray = arr.map(obj => {
    const orbitalPeriodSeconds = calculateOrbitalPeriod(obj.avgAlt);
    return { name: obj.name, orbitalPeriod: orbitalPeriodSeconds };
  });

  return transformedArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);