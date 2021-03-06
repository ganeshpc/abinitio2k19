export interface Competition {
  id: string;

  name: string;
  department: string;

  imagePath: string;

  shortDescription: string;
  longDescription: string;
  rules: string;
  registrationFees: number;
  feesPer: string;

  coordinator: string;
  subCoordinator1: string;
  subCoordinator2: string;
}
