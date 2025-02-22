import { Card, Button } from "react-bootstrap";

function AuctionCard({ auction }) {
  return (
    <Card className="shadow-lg auction-card">
      <Card.Img variant="top" src={auction.image} alt={auction.title} />
      <Card.Body>
        <Card.Title>{auction.title}</Card.Title>
        <Card.Text>Starting Bid: ${auction.startingBid}</Card.Text>
        <Button variant="primary">Place a Bid</Button>
      </Card.Body>
    </Card>
  );
}

export default AuctionCard;
