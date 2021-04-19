export class StatePickupRequestDto {
  elevatorId: string;
  requestedStartStoreNo: string;
  direction: string;
  constructor(elevatorId: number, requestedStartStoreNo: number, direction: number) {
    this.elevatorId = String(elevatorId);
    this.requestedStartStoreNo = String(requestedStartStoreNo);
    this.direction = String(direction);
  }
}
