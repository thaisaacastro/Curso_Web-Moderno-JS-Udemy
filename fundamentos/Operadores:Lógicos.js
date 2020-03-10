v e v -> v    // && i 'e' todos tem que ser verdadeiro para dar true
v e f -> f
f e f -> f

v ou ? -> v  // || ou bastar ter um verdadeiro para ser true em toda a expressão
f ou v -> v
f ou f -> f

v xor v -> f   //xor = exclusivo
f xor f -> f
f xor v -> v
v xor f -> v

!v -> f
!f -> v
