const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All rooms',
  });
};


export {
    allRooms,
}