export interface Competition {
  id: string,

  title: string,
  department: string,

  imagePath: string,

  shortDescription: string,
  longDescription: string,
  rules: string,
  registrationFees: number,

  coordinator: Student,
  subCoordinator1: Student,
  subCoordinator2: Student,
}
