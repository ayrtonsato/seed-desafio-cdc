export class AuthorEntity {
  public id: number;
  public name: string;
  public email: string;
  public description: string;
  public createdAt: string;

  constructor({ id, name, email, description, createdAt }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.email = email;
    this.createdAt = createdAt;
  }
}
