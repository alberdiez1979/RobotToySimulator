using RobotToySimulator.Entities.Toy;
using RobotToySimulator.Entities.Toy.Interface;
using RobotToySimulator.Entities.ToyBoard.Interface;

namespace RobotToySimulator.Entities.Behaviours
{
    /// <summary>
    /// This class is used to simulate the behaviour of the toy.
    /// It calls the interfaces from other classes to make a behaviour object.
    /// Methods for this object include processing the string and
    /// rendering the report.
    /// </summary>
    public class Behaviour
    {
        public IToyRobot ToyRobot { get; private set; }
        public IToyBoard SquareBoard { get; private set; }
       
        public Behaviour(IToyRobot toyRobot, IToyBoard squareBoard)
        {
            ToyRobot = toyRobot;
            SquareBoard = squareBoard;            
        }

        public string ProcessCommand(Command input, Position pos, Direction dir)
        {
            if (input != Command.Place && ToyRobot.Position == null) return string.Empty;

            switch (input)
            {
                case Command.Place:
                    if (SquareBoard.IsValidPosition(pos))
                        ToyRobot.Place(pos, dir);
                    break;
                case Command.Move:
                    var newPosition = ToyRobot.GetNextPosition();
                    if (SquareBoard.IsValidPosition(newPosition))
                        ToyRobot.Position = newPosition;
                    break;
                case Command.Left:
                    ToyRobot.RotateLeft();
                    break;
                case Command.Right:
                    ToyRobot.RotateRight();
                    break;
                case Command.Report:
                    return GetReport();
            }
            return string.Empty;
        }

        public string GetReport()
        {
            return string.Format("Output: {0},{1},{2}", ToyRobot.Position.X,
                ToyRobot.Position.Y, ToyRobot.Direction.ToString().ToUpper());
        }
    }
}
