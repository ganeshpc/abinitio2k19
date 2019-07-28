export interface Competition {
  id: string;

  title: string;
  department: string;

  imagePath: string;

  shortDescription: string;
  longDescription: string;
  rules: string;
  registrationFees: number;

  coordinator: string;
  subCoordinator1: string;
  subCoordinator2: string;
}
