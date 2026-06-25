# Materiales oficiales Brady - Impresora i5100

Este documento reúne los artículos oficiales más relevantes para la operación, configuración, calibración y solución básica de problemas de la impresora **Brady i5100**.

El objetivo es centralizar la información crítica para técnicos y operadores, reducir errores de uso, disminuir desperdicio de etiquetas y asegurar una operación consistente del equipo.

---

## 1. Configuración correcta de sensores en la i5100

**Artículo oficial:**  
[i5100 - How to Configure Correct Sensor Settings](https://support.bradyid.com/s/article/How-to-Configure-Correct-Sensor-Settings-on-the-i5100)

### Descripción

Este artículo explica cómo seleccionar y ajustar correctamente los sensores de la impresora i5100 según el tipo de material utilizado. La i5100 utiliza diferentes sensores para mantener la calibración dependiendo del tipo de etiqueta o material. 【1-52debb】

### Casos cubiertos

- Etiquetas con separación/gap.
- Etiquetas con muesca/notch.
- Permasleeves.
- Material continuo.
- Ajuste manual de sensores.
- Validación mediante el botón de avance/feed.

### Importancia operativa

Una configuración incorrecta del sensor puede provocar:

- Descalibración.
- Avance incorrecto de etiquetas.
- Desperdicio de material.
- Errores de detección.
- Problemas al cambiar de número de parte.

### Notas clave

- Para la mayoría de etiquetas troqueladas con separación, la impresora utiliza el sensor de gap en la posición 2. 【1-52debb】
- En materiales continuos, la opción de material continuo desactiva esencialmente el sensor de etiquetas, ya que el tamaño de página se define desde el software. 【1-52debb】
- Después de ajustar los sensores, se recomienda presionar el botón **Feed** varias veces para confirmar que la impresora avance una etiqueta a la vez. 【1-52debb】

---

## 2. Configuración de la i5100 para materiales continuos

**Artículo oficial:**  
[i5100 - How to Setup the i5100 to Use Continuous Label Materials](https://support.bradyid.com/s/article/How-to-Setup-the-i5100-to-Use-Continuous-Label-Materials)

### Descripción

Este artículo describe cómo configurar la impresora i5100 para utilizar materiales continuos, es decir, materiales que vienen como una tira larga sin espacios/gaps ni muescas/notches. 【2-555a71】

### Ruta de configuración

En la pantalla de la impresora:

```text
Gear Icon > Setup > Labels > Label Sensor > Continuous