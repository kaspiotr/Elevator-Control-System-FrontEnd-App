export class StateUpdateRequestDto {
  elevatorId: string;
  currentStoreNo: string;
  targetStoreNo: string;
  constructor(elevatorId: number, currentStoreNo: number, targetStoreNo: number) {
    this.elevatorId = String(elevatorId);
    this.currentStoreNo = String(currentStoreNo);
    this.targetStoreNo = String(targetStoreNo);
  }
}
