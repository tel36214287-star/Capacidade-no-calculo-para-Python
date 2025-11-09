# Capacidade de calculo para Python!
-----------------------------------------------------
# Definindo a sequência de Fibonacci
fib = [0, 1]  # os dois primeiros números

# Gerando os próximos 8 números para ter 10 no total
for i in range(2, 10):
    fib.append(fib[i-1] + fib[i-2])

print("Os 10 primeiros números de Fibonacci:", fib)
print("Soma dos 10 primeiros números:", sum(fib))

----------------------------------------------------

# Lista inicial da sequência de Fibonacci
fib = [0, 1]
soma = sum(fib)  # soma inicial: 0+1
n = 1

# Gerar termos até que a soma atinja 88
while soma < 88:
    n += 1
    fib.append(fib[n-1] + fib[n-2])
    soma += fib[n]  # atualiza a soma incrementalmente

# Mostrar resultados
print("Sequência até atingir soma 88:", fib)
print("Soma:", soma)
print("Número de termos usados:", len(fib))

-------------‐--------------------------------------

# Inicializa a sequência de Fibonacci
fib = [0, 1]
soma = sum(fib)
n = 1

# Adiciona termos até que a soma seja 88
while soma < 88:
    n += 1
    novo_termo = fib[n-1] + fib[n-2]
    fib.append(novo_termo)
    soma += novo_termo

# Mostra resultados
print("Sequência até soma 88:", fib)
print("Soma:", soma)
print("Número de termos:", len(fib))


-------------‐--------------------------------------
import numpy as np
import matplotlib.pyplot as plt

# Função no espaço
L = 10
N = 1024
x = np.linspace(0, L, N, endpoint=False)
f = np.sin(2 * np.pi * x / L)  # função de exemplo

# Fourier
f_hat = np.fft.fft(f)
k = 2 * np.pi * np.fft.fftfreq(N, d=L/N)  # número de onda

# Derivada primeira em Fourier
df_hat = 1j * k * f_hat
df = np.fft.ifft(df_hat)  # volta para o espaço

# Derivada analítica para comparação
df_analitica = (2 * np.pi / L) * np.cos(2 * np.pi * x / L)

# Plot
plt.plot(x, df.real, label="Derivada via Fourier")
plt.plot(x, df_analitica, '--', label="Derivada analítica")
plt.legend()
plt.xlabel("x")
plt.ylabel("df/dx")
plt.title("Derivada espacial usando Transformada de Fourier")
plt.show()

![1000009285](https://github.com/user-attachments/assets/e0a7dbe1-541c-4dd6-8fee-e63a9cdd5b54)


-------------‐--------------------------------------

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# -----------------------------
# Parâmetros do domínio
# -----------------------------
L = 10.0       # comprimento do espaço
N = 256        # número de pontos
dx = L/N
x = np.linspace(0, L, N, endpoint=False)
c = 1.0        # velocidade da onda
dt = 0.01      # passo de tempo
t_max = 5.0
t_steps = int(t_max/dt)

# -----------------------------
# Número de onda para Fourier
# -----------------------------
k = 2 * np.pi * np.fft.fftfreq(N, d=dx)

# -----------------------------
# Condição inicial: pulso gaussiano
# -----------------------------
u0 = np.exp(-50*(x-L/2)**2)
u_hat = np.fft.fft(u0)
u_hat_prev = u_hat.copy()  # para o esquema de segunda ordem

# -----------------------------
# Preparar figura para animação
# -----------------------------
fig, ax = plt.subplots(figsize=(10,4))
line, = ax.plot(x, u0)
ax.set_xlim(0, L)
ax.set_ylim(-1.2, 1.2)
ax.set_xlabel("x")
ax.set_ylabel("u(x,t)")
ax.set_title("Simulação de onda 1D via Fourier")

# -----------------------------
# Função de atualização da animação
# -----------------------------
def update(frame):
    global u_hat, u_hat_prev
    if frame == 0:
        u_hat_new = u_hat - 0.5 * (dt**2) * (c**2) * (-(k**2)) * u_hat
    else:
        u_hat_new = 2*u_hat - u_hat_prev - (dt**2) * (c**2) * (-(k**2)) * u_hat

    u_hat_prev = u_hat
    u_hat = u_hat_new

    u = np.fft.ifft(u_hat).real
    line.set_ydata(u)
    return line,

# -----------------------------
# Criar animação
# -----------------------------
anim = FuncAnimation(fig, update, frames=t_steps, interval=20, blit=True)
plt.show()

![1000009288](https://github.com/user-attachments/assets/697b676b-7627-438f-bcbb-062b1fe99e73)

-------------‐--------------------------------------
import numpy as np
import matplotlib.pyplot as plt

# -----------------------------
# Parâmetros do sinal
# -----------------------------
t = np.linspace(0, 5, 500)       # tempo
f = 6 * t                        # exemplo: f(t) = 6t

# -----------------------------
# Derivada inversa via integração numérica
# -----------------------------
F = np.cumsum(f) * (t[1]-t[0])   # soma cumulativa * passo de tempo
F = F - F[0]                     # opcional: definir constante inicial C=0

# -----------------------------
# Plot
# -----------------------------
plt.figure(figsize=(10,5))
plt.plot(t, f, label='f(t) = 6t')
plt.plot(t, F, label='Derivada inversa de f(t)')
plt.xlabel('t')
plt.ylabel('Amplitude')
plt.title('Derivada inversa (integração) de um sinal')
plt.legend()
plt.grid(True)
plt.show()

![1000009291](https://github.com/user-attachments/assets/5166b456-915f-42fc-b61d-6c077d949d35)


-------------‐--------------------------------------

import numpy as np
import matplotlib.pyplot as plt

# -----------------------------
# Parâmetros do tempo e ondas
# -----------------------------
t = np.linspace(0, 1, 1000)  # tempo em segundos
A = [1, 0.8, 0.6, 0.5, 0.4, 0.3, 0.2]      # amplitudes
f = [1, 2, 3, 4, 5, 6, 7]                  # frequências em Hz
phi = [0, np.pi/6, np.pi/4, np.pi/3, 0, np.pi/2, np.pi/5]  # fases

# -----------------------------
# Inicializa a soma
# -----------------------------
f_total = np.zeros_like(t)

# -----------------------------
# Adiciona ondas passo a passo
# -----------------------------
for n in range(7):
    f_total += A[n] * np.sin(2 * np.pi * f[n] * t + phi[n])
    if n == 0:
        f_first = A[0] * np.sin(2 * np.pi * f[0] * t + phi[0])  # salva a primeira onda

# -----------------------------
# Plot
# -----------------------------
plt.figure(figsize=(10,5))
plt.plot(t, f_first, label="Primeira onda (n=1)", linestyle='--')
plt.plot(t, f_total, label="Soma das 7 ondas", color='black')
plt.title("Primeira onda vs soma de 7 ondas")
plt.xlabel("t [s]")
plt.ylabel("Amplitude")
plt.legend()
plt.grid(True)
plt.show()

![1000009294](https://github.com/user-attachments/assets/d17fa52d-2b73-4637-bf35-125b966a3353)

Aplicações complexas e funcionais para experimentação de Python no Colab Google, com plot aceitável a nível escolar/acadêmico. 



