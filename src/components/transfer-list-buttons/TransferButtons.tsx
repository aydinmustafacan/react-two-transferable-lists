function TransferButtons({ handleLeftMove, handleRightMove }) {
  return (
    <>
      <button onClick={() => handleLeftMove()}> To Left </button>
      <Break />
      <button onClick={() => handleRightMove()}> To Right </button>
    </>
  );
}

function Break() {
  return <div style={{ height: "25px" }} />;
}

export default TransferButtons;
