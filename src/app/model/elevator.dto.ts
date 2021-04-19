export class ElevatorDto {
  id: number;
  currentStoreNo: number;
  direction: number;


  constructor(id: number, currentStoreNo: number, direction: number) {
    this.id = id;
    this.currentStoreNo = currentStoreNo;
    this.direction = direction;
  }
}
