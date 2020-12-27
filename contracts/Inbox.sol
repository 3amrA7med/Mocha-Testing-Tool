pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    bool public seen;

    function Inbox(string initialMessage) public {
        message = initialMessage;
        seen = false;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function readMessage() public {
        seen = true;
    }
}
