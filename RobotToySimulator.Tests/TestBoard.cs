using Microsoft.VisualStudio.TestTools.UnitTesting;
using RobotToySimulator.Entities.Toy;
using RobotToySimulator.Entities.ToyBoard;

namespace ToySimulator.Test
{
    [TestClass]
    public class TestBoard
    {

        /// <summary>
        /// Try to put the toy outside of the board
        /// </summary>
        [TestMethod]
        public void TestInvalidBoardPosition()
        {
            // arrange
            ToyBoard squareBoard = new ToyBoard(5, 5);            
            Position position = new Position(6, 6);
          
            // act
            var result = squareBoard.IsValidPosition(position);

            // assert
            Assert.IsFalse(result);
        }
        
        /// <summary>
        /// Test valid positon 
        /// </summary>
        [TestMethod]
        public void TestValidBoardPosition()
        {
            // arrange
            ToyBoard squareBoard = new ToyBoard(5, 5);
            Position position = new Position(1, 4);

            // act
            var result = squareBoard.IsValidPosition(position);

            // assert
            Assert.IsTrue(result);            
        }   

    }
}
