# codebar-recursion

## Factorial

```mermaid
sequenceDiagram
    participant main
    participant fact5 as fact
    participant fact4 as fact
    participant fact3 as fact
    participant fact2 as fact
    participant fact1 as fact

    main->>+fact5: 5
        fact5->>+fact4: 4
            fact4->>+fact3: 3
                fact3->>+fact2: 2
                    fact2->>+fact1: 1
                    fact1-->>-fact2: 1
                fact2-->>-fact3: 2 = 2 * 1
            fact3-->>-fact4: 6 = 3 * 2
        fact4-->>-fact5: 24 = 4 * 6
    fact5-->>-main: 120 = 5 * 24
```
### Python

```python
def fact(n: int) -> int:
  if n <= 1:
    return 1
  else:
    return n * fact(n - 1)

print(fact(5))
```

### Java

```java
public class Factorial {
  public static void main(String[] args) {
    System.out.println(fact(5));
  }

  public static int fact(int n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
}
```
