const cars = [
    {car: 'Honda', bought: true},
    {car: 'Infiniti', bought: true},
    {car: 'Ferrari', bought: false}
]

module.exports = {
    getAll: function() {
        return cars
    }
}