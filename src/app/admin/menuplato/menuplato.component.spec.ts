import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPlatoComponent } from './menuplato.component';  // Cambiar el nombre del componente aquí

describe('MenuPlatoComponent', () => {
  let component: MenuPlatoComponent;
  let fixture: ComponentFixture<MenuPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPlatoComponent]  // Asegúrate de que el componente esté importado correctamente
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPlatoComponent);  // Crear el fixture para el componente correcto
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Asegúrate de que el componente se haya creado correctamente
  });
});
